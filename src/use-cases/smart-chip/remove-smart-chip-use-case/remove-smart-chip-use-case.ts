import { Result } from "@/cross-cutting-concerns";
import { ConcreteCannotFindDto } from "@/use-cases/dtos";
import { DtoLoggerProxy } from "@/use-cases/interfaces/proxies";
import {  RemoveSmartChipUseCase, SmartChipRepository } from "@/use-cases/interfaces/smart-chip";

export namespace ConcreteRemoveSmartChipUseCase {
    export interface ConstructorParameters {
        outputPort: RemoveSmartChipUseCase.OutputPort;
        smartChipRepository: SmartChipRepository.InputPort;
        dtoLogger: DtoLoggerProxy;
    }

    export class UseCase implements RemoveSmartChipUseCase.InputPort
    {
    	private readonly _outputPort: RemoveSmartChipUseCase.OutputPort;

    	private readonly _smartChipRepository: SmartChipRepository.InputPort;

    	private readonly _dtoLogger: DtoLoggerProxy;

    	constructor({ outputPort, smartChipRepository, dtoLogger }: ConstructorParameters)
    	{
    		this._outputPort = outputPort;
    		this._smartChipRepository = smartChipRepository;
    		this._dtoLogger = dtoLogger;
    	}

    	public async Remove({ id }: RemoveSmartChipUseCase.RemoveRequestModel): Promise<void>
    	{
    		const { response: removeResult } = await this._smartChipRepository.Remove({ id });
    		if (!removeResult.isPrimary)
    		{
    			return this._outputPort.RemoveResponse({
    				response: Result.Secondary(this._dtoLogger.ProxyInfo(new ConcreteCannotFindDto.Dto({
    					code: RemoveSmartChipUseCase.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: "id",
    					searchValue: id,
    					entityName: "SmartChip",
    					message: `Cannot remove SmartChip entity with id ${id}, because it was not found.`
    				})))
    			});
    		}

    		this._outputPort.RemoveResponse({
    			response: Result.Primary(id)
    		});
    	}
    }
}
