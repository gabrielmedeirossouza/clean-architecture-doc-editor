import { Result } from "@/shared/result";
import { CannotFindDTO } from "@/use-cases/dtos";
import { ILogger } from "@/use-cases/interfaces/logger";
import { IGetSmartChipUseCaseInputPort, IGetSmartChipUseCaseOutputPort, IGetSmartChipUseCaseRequestModel, ISmartChipRepository } from "@/use-cases/interfaces/smart-chip";

export interface IGetSmartChipUseCaseConstructorParameters {
    outputPort: IGetSmartChipUseCaseOutputPort;
    smartChipRepository: ISmartChipRepository;
    logger: ILogger;
}

export class GetSmartChipUseCase implements IGetSmartChipUseCaseInputPort
{
	private _outputPort: IGetSmartChipUseCaseOutputPort;

	private _smartChipRepository: ISmartChipRepository;

	private _logger: ILogger;

	constructor({ outputPort, smartChipRepository, logger }: IGetSmartChipUseCaseConstructorParameters)
	{
		this._outputPort = outputPort;
		this._smartChipRepository = smartChipRepository;
		this._logger = logger;
	}

	public async GetSmartChipById({ id }: IGetSmartChipUseCaseRequestModel): Promise<void>
	{
		const persistedSmartChipResult = await this._smartChipRepository.GetSmartChipById(id);
		if (!persistedSmartChipResult.ok)
		{
			this._logger.LogInfo(`GetSmartChipUseCase: Cannot get SmartChip entity, because it was not found. Id: "${id}"`);

			return this._outputPort.GetSmartChipByIdResponse({
				response: Result.Fail(new CannotFindDTO({
					searchCriteria: "id",
					searchValue: id,
					entityName: "SmartChip",
					message: "GetSmartChipUseCase: Cannot get SmartChip entity, because it was not found."
				}))
			});
		}

		this._logger.LogInfo(`GetSmartChipUseCase: GetSmartChipById SmartChip with id ${id} found.`);

		return this._outputPort.GetSmartChipByIdResponse({
			response: Result.Ok(persistedSmartChipResult.value)
		});
	}
}
