import { Result } from "@/shared/result";
import { CannotFindDTO } from "@/use-cases/dtos";
import { ILogger } from "@/use-cases/interfaces/logger";
import { IEditSmartChipUseCaseInputPort, IEditSmartChipUseCaseOutputPort, IEditSmartChipUseCaseRequestModel, ISmartChipRepository, ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip";

export interface IEditSmartChipUseCaseConstructorParameters {
    outputPort: IEditSmartChipUseCaseOutputPort;
    validationService: ISmartChipValidationService;
    smartChipRepository: ISmartChipRepository;
    logger: ILogger;
}

export class EditSmartChipUseCase implements IEditSmartChipUseCaseInputPort
{
	private readonly _outputPort: IEditSmartChipUseCaseOutputPort;

	private readonly _smartChipRepository: ISmartChipRepository;

	private readonly _logger: ILogger;

	private readonly _validationService: ISmartChipValidationService;

	constructor({ outputPort, smartChipRepository, logger, validationService }: IEditSmartChipUseCaseConstructorParameters)
	{
		this._outputPort = outputPort;
		this._smartChipRepository = smartChipRepository;
		this._logger = logger;
		this._validationService = validationService;
	}

	public async Edit({ id, label, prefix, position }: IEditSmartChipUseCaseRequestModel): Promise<void>
	{
		const compose = Result.compose;

		if (label !== undefined)
		{
			compose.AddHandler(this._validationService.ValidateLabel(label)).On((response) => this._outputPort.LabelResponse({ response }));
		}

		if (prefix !== undefined)
		{
			compose.AddHandler(this._validationService.ValidatePrefix(prefix)).On((response) => this._outputPort.PrefixResponse({ response }));
		}

		if (position !== undefined)
		{
			compose.AddHandler(this._validationService.ValidatePosition(position)).On((response) => this._outputPort.PositionResponse({ response }));
		}

		if (compose.hasSecondary)
		{
			return this._logger.LogInfo("EditSmartChipUseCase: Cannot edit SmartChip entity, because one or more fields are invalid.");
		}

		const getSmartChipByIdResult = await this._smartChipRepository.GetSmartChipById(id);
		if (!getSmartChipByIdResult.isPrimary)
		{
			this._logger.LogInfo(`EditSmartChipUseCase: Cannot edit SmartChip entity, because it was not found. Id: "${id}"`);

			return this._outputPort.EditResponse({
				response: Result.Secondary(new CannotFindDTO({
					searchCriteria: 'id',
					searchValue: id,
					message: "EditSmartChipUseCase: Cannot edit SmartChip entity, because it was not found.",
					entityName: "SmartChip"
				}))
			});
		}

		const persistedSmartChip = getSmartChipByIdResult.primaryValue;
		persistedSmartChip.entity.label = label ?? persistedSmartChip.entity.label;
		persistedSmartChip.entity.prefix = prefix ?? persistedSmartChip.entity.prefix;
		persistedSmartChip.entity.position = position ?? persistedSmartChip.entity.position;

		const editSmartChipRepositoryResult = await this._smartChipRepository.Edit(persistedSmartChip);
		if (!editSmartChipRepositoryResult.isPrimary)
		{
			return this._outputPort.EditResponse({
				response: Result.Secondary(new CannotFindDTO({
					searchCriteria: 'id',
					searchValue: id,
					message: "EditSmartChipUseCase: Cannot edit SmartChip entity, because it was not found.",
					entityName: "SmartChip"
				}))
			});
		}

		this._logger.LogInfo(
			`EditSmartChipUseCase: SmartChip entity edited successfully. ID: "${id}", Label: "${label}", Prefix: "${prefix}", Position: "${position}"`
		);

		return this._outputPort.EditResponse({ response: Result.Primary(persistedSmartChip) });
	}
}
