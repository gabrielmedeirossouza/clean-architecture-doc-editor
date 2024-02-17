import { DtoLoggerProxy } from "@/use-cases/interfaces/proxies/dto-logger-proxy";
import { ListSmartChipUseCase, SmartChipRepository } from "@/use-cases/interfaces/smart-chip";

export namespace ConcreteListSmartChipUseCase {
    export interface ConstructorParameters {
        outputPort: ListSmartChipUseCase.OutputPort;
        smartChipRepository: SmartChipRepository.InputPort;
        dtoLogger: DtoLoggerProxy;
    }

    export class UseCase implements ListSmartChipUseCase.InputPort
    {
    	private readonly _outputPort: ListSmartChipUseCase.OutputPort;

    	private readonly _smartChipRepository: SmartChipRepository.InputPort;

    	private readonly _dtoLogger: DtoLoggerProxy;

    	constructor({ outputPort, smartChipRepository, dtoLogger }: ConstructorParameters)
    	{
    		this._outputPort = outputPort;
    		this._smartChipRepository = smartChipRepository;
    		this._dtoLogger = dtoLogger;
    	}

    	public async List(): Promise<void>
    	{
    		// TODO: Implement result response
    		const { response: smartChipList } = await this._smartChipRepository.List();

    		return this._outputPort.ListResponse({ response: smartChipList });
    	}
    }
}
