import { PersistedEntity, SmartChip } from "@/entities/smart-chip";
import { Result } from "@/shared/result";
import { MessageDTO } from "@/use-cases/dtos";
import { ILogger } from "@/use-cases/interfaces/logger";
import { ICreateSmartChipUseCaseInputPort, ICreateSmartChipUseCaseOutputPort, ICreateSmartChipUseCaseRequestModel } from "@/use-cases/interfaces/smart-chip/create-smart-chip-use-case";
import { ISmartChipRepository } from "@/use-cases/interfaces/smart-chip/smart-chip-repository";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip/smart-chip-validation-service";

export interface ICreateSmartChipUseCaseConstructorParameters {
    logger: ILogger;
    outputPort: ICreateSmartChipUseCaseOutputPort;
    smartChipValidationService: ISmartChipValidationService;
    smartChipRepository: ISmartChipRepository;
}

export class CreateSmartChipUseCase implements ICreateSmartChipUseCaseInputPort
{
	private readonly _outputPort: ICreateSmartChipUseCaseOutputPort;

	private readonly _smartChipValidationService: ISmartChipValidationService;

	private readonly _logger: ILogger;

	private readonly _smartChipRepository: ISmartChipRepository;

	constructor({ outputPort, smartChipValidationService, logger, smartChipRepository }: ICreateSmartChipUseCaseConstructorParameters)
	{
		this._outputPort = outputPort;
		this._smartChipValidationService = smartChipValidationService;
		this._logger = logger;
		this._smartChipRepository = smartChipRepository;
	}

	public async Create({ label, prefix, position }: ICreateSmartChipUseCaseRequestModel): Promise<void>
	{
		const composeFields = Result.compose
			.AddHandler(this._smartChipValidationService.ValidateLabel(label)).OnSecondary((response) => this._outputPort.CreateResponse({ response })).Handle()
			.AddHandler(this._smartChipValidationService.ValidatePrefix(prefix)).OnSecondary((response) => this._outputPort.CreateResponse({ response })).Handle()
			.AddHandler(this._smartChipValidationService.ValidatePosition(position)).OnSecondary((response) => this._outputPort.CreateResponse({ response })).Handle();

		if (composeFields.hasSecondary)
		{
			return;
		}

		const [labelResult, prefixResult, positionResult] = await Promise.all([
			this._smartChipRepository.FindByLabel(label),
			this._smartChipRepository.FindByPrefix(prefix),
			this._smartChipRepository.FindByPosition(position)
		]);

		const composeFinds = Result.compose
			.AddHandler(labelResult)
			.OnPrimary(() => this._outputPort.CreateResponse({
				response: Result.Secondary(new MessageDTO({
					code: "LABEL_ALREADY_EXISTS",
					message: `CreateSmartChipUseCase: Cannot create SmartChip entity, because a SmartChip with label "${label}" already exists.`
				}))
			}))
			.Handle()
			.AddHandler(prefixResult)
			.OnPrimary(() => this._outputPort.CreateResponse({
				response: Result.Secondary(new MessageDTO({
					code: "PREFIX_ALREADY_EXISTS",
					message: `CreateSmartChipUseCase: Cannot create SmartChip entity, because a SmartChip with prefix "${prefix}" already exists.`
				}))
			}))
			.Handle()
			.AddHandler(positionResult)
			.OnPrimary(() => this._outputPort.CreateResponse({
				response: Result.Secondary(new MessageDTO({
					code: "POSITION_ALREADY_EXISTS",
					message: `CreateSmartChipUseCase: Cannot create SmartChip entity, because a SmartChip with position "${position}" already exists.`
				}))
			}))
			.Handle();

		if (!composeFinds.hasSecondary)
		{
			return;
		}

		const smartChip = new SmartChip(label, prefix, position, []);
		const id = await this._smartChipRepository.Create(smartChip);
		const persistedSmartChip = new PersistedEntity(id, smartChip);

		return this._outputPort.CreateResponse({ response: Result.Primary(persistedSmartChip) });
	}
}
