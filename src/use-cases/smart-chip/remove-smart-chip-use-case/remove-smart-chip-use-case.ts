import { Result } from "@/shared/result";
import { CannotFindDTO } from "@/use-cases/dtos";
import { ILogger } from "@/use-cases/interfaces/logger";
import { IRemoveSmartChipUseCaseInputPort, IRemoveSmartChipUseCaseOutputPort, IRemoveSmartChipUseCaseRequestModel, ISmartChipRepository } from "@/use-cases/interfaces/smart-chip";

export interface IRemoveSmartChipUseCaseConstructorParameters {
    outputPort: IRemoveSmartChipUseCaseOutputPort;
    smartChipRepository: ISmartChipRepository;
    logger: ILogger;
}

export class RemoveSmartChipUseCase implements IRemoveSmartChipUseCaseInputPort
{
	private readonly _outputPort: IRemoveSmartChipUseCaseOutputPort;

	private readonly _smartChipRepository: ISmartChipRepository;

	private readonly _logger: ILogger;

	constructor({ outputPort, smartChipRepository, logger }: IRemoveSmartChipUseCaseConstructorParameters)
	{
		this._outputPort = outputPort;
		this._smartChipRepository = smartChipRepository;
		this._logger = logger;
	}

	public async Remove({ id }: IRemoveSmartChipUseCaseRequestModel): Promise<void>
	{
		const removeResult = await this._smartChipRepository.Remove(id);
		if (!removeResult.isPrimary)
		{
			return this._outputPort.RemoveResponse({
				response: Result.Secondary(new CannotFindDTO({
					code: "SMART_CHIP_NOT_FOUND",
					searchCriteria: "id",
					searchValue: id,
					entityName: "SmartChip",
					message: `RemoveSmartChipUseCase: Cannot remove SmartChip entity with id ${id}, because it was not found.`
				}))
			});
		}

		this._outputPort.RemoveResponse({
			response: Result.Primary(id)
		});
	}
}
