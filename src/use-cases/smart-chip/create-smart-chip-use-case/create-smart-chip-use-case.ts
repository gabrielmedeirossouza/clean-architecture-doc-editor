import { PersistedEntity, SmartChip } from "@/entities/smart-chip";
import { Result } from "@/shared/result";
import { MessageDTO } from "@/use-cases/dtos";
import { ILogger } from "@/use-cases/interfaces/logger";
import { ICreateSmartChipUseCaseInputPort, ICreateSmartChipUseCaseOutputPort, ICreateSmartChipUseCaseRequestModel } from "@/use-cases/interfaces/smart-chip/create-smart-chip-use-case";
import { ISmartChipRepository } from "@/use-cases/interfaces/smart-chip/smart-chip-repository";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip/smart-chip-validation-service";

export interface ICreateSmartChipUseCaseConstructorParameters {
    logger: ILogger;
    smartChipValidationService: ISmartChipValidationService;
    outputPort: ICreateSmartChipUseCaseOutputPort;
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
		const compose = Result.compose
			.AddHandler(this._smartChipValidationService.ValidateLabel(label), (response) => this._outputPort.LabelResponse({ response }))
			.AddHandler(this._smartChipValidationService.ValidatePrefix(prefix), (response) => this._outputPort.PrefixResponse({ response }))
			.AddHandler(this._smartChipValidationService.ValidatePosition(position), (response) => this._outputPort.PositionResponse({ response }));

		if (compose.someFailed)
		{
			this._logger.LogInfo("CreateSmartChipUseCase: Cannot create SmartChip entity, because one or more fields are invalid.");

			return this._outputPort.CreateResponse({
				response: Result.Fail(new MessageDTO({ message: "CreateSmartChipUseCase: Cannot create SmartChip entity, because one or more fields are invalid." }))
			});
		}

		const smartChip = new SmartChip(label, prefix, position, []);
		const id = await this._smartChipRepository.Create(smartChip);
		const persistedSmartChip = new PersistedEntity(id, smartChip);

		this._logger.LogInfo(
			`CreateSmartChipUseCase: SmartChip entity created successfully. ID: "${id}", Label: "${label}", Prefix: "${prefix}", Position: "${position}"`
		);

		return this._outputPort.CreateResponse({ response: Result.Ok(persistedSmartChip) });
	}
}
