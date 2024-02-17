import { Result } from "@/cross-cutting-concerns";
import { ConcreteCannotFindDto } from "@/use-cases/dtos";
import { DtoLoggerProxy } from "@/use-cases/interfaces/proxies/dto-logger-proxy";
import { GetSmartChipUseCase, SmartChipRepository } from "@/use-cases/interfaces/smart-chip";

export namespace ConcreteGetSmartChipUseCase {
    export interface ConstructorParameters {
        outputPort: GetSmartChipUseCase.OutputPort;
        smartChipRepository: SmartChipRepository.InputPort;
        dtoLogger: DtoLoggerProxy;
    }

    export class UseCase implements GetSmartChipUseCase.InputPort
    {
    	private _outputPort: GetSmartChipUseCase.OutputPort;

    	private _smartChipRepository: SmartChipRepository.InputPort;

    	private _dtoLogger: DtoLoggerProxy;

    	constructor({ outputPort, smartChipRepository, dtoLogger }: ConstructorParameters)
    	{
    		this._outputPort = outputPort;
    		this._smartChipRepository = smartChipRepository;
    		this._dtoLogger = dtoLogger;
    	}

    	public async GetById({ id }: GetSmartChipUseCase.GetByIdRequestModel): Promise<void>
    	{
    		const { response: persistedSmartChipResult } = await this._smartChipRepository.Get({ id });
    		if (!persistedSmartChipResult.isPrimary)
    		{
    			return this._outputPort.GetByIdResponse({
    				response: Result.Secondary(this._dtoLogger.ProxyInfo(new ConcreteCannotFindDto.Dto({
    					code: GetSmartChipUseCase.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: "id",
    					searchValue: id,
    					entityName: "SmartChip",
    					message: `Cannot get SmartChip entity with id ${id}, because it was not found.`
    				})))
    			});
    		}

    		return this._outputPort.GetByIdResponse({
    			response: Result.Primary(persistedSmartChipResult.primaryValue)
    		});
    	}
    }
}
