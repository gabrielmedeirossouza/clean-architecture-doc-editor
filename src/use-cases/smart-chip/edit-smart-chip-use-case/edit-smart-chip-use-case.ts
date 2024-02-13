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
			compose.AddHandler(this._validationService.ValidateLabel(label)).OnSecondary((response) => this._outputPort.EditResponse({ response }));
		}

		if (prefix !== undefined)
		{
			compose.AddHandler(this._validationService.ValidatePrefix(prefix)).OnSecondary((response) => this._outputPort.EditResponse({ response }));
		}

		if (position !== undefined)
		{
			compose.AddHandler(this._validationService.ValidatePosition(position)).OnSecondary((response) => this._outputPort.EditResponse({ response }));
		}

		if (compose.hasSecondary)
		{
			return;
		}

		const getSmartChipByIdResult = await this._smartChipRepository.GetSmartChipById(id);
		if (!getSmartChipByIdResult.isPrimary)
		{
			return this._outputPort.EditResponse({
				response: Result.Secondary(new CannotFindDTO({
					code: "SMART_CHIP_NOT_FOUND",
					searchCriteria: 'id',
					searchValue: id,
					message: `EditSmartChipUseCase: Cannot edit SmartChip entity with id ${id}, because it was not found.`,
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
					code: "SMART_CHIP_NOT_FOUND",
					searchCriteria: 'id',
					searchValue: id,
					message: `EditSmartChipUseCase: Cannot edit SmartChip entity with id ${id}, because it was not found.`,
					entityName: "SmartChip"
				}))
			});
		}

		return this._outputPort.EditResponse({ response: Result.Primary(persistedSmartChip) });
	}
}
