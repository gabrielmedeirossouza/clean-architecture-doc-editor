import { ILogger } from "@/use-cases/interfaces/logger";
import { IListSmartChipUseCaseInputPort, IListSmartChipUseCaseOutputPort, ISmartChipRepository } from "@/use-cases/interfaces/smart-chip";

export interface IListSmartChipUseCaseConstructorParameters {
    outputPort: IListSmartChipUseCaseOutputPort;
    smartChipRepository: ISmartChipRepository;
    logger: ILogger;
}

export class ListSmartChipUseCase implements IListSmartChipUseCaseInputPort
{
	private readonly _outputPort: IListSmartChipUseCaseOutputPort;

	private readonly _smartChipRepository: ISmartChipRepository;

	private readonly _logger: ILogger;

	constructor({ outputPort, smartChipRepository, logger }: IListSmartChipUseCaseConstructorParameters)
	{
		this._outputPort = outputPort;
		this._smartChipRepository = smartChipRepository;
		this._logger = logger;
	}

	public async List(): Promise<void>
	{
		const smartChipList = await this._smartChipRepository.GetSmartChipList();

		return this._outputPort.ListResponse({ response: smartChipList });
	}
}
