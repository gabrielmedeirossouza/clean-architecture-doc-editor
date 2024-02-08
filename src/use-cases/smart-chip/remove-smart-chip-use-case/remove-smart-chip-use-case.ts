import { Result } from "@/shared/result";
import { MessageDTO } from "@/use-cases/dtos";
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
		if (!removeResult.ok)
		{
			return this._outputPort.Response({
				response: Result.Fail(new MessageDTO({ message: "RemoveSmartChipUseCase: Cannot remove SmartChip entity, because the repository failed to remove it." }))
			});
		}

		this._logger.LogInfo(`RemoveSmartChipUseCase: SmartChip entity removed successfully. ID: ${id}`);

		this._outputPort.Response({
			response: Result.Ok(id)
		});
	}
}
