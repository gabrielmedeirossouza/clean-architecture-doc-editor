import { Result } from "@/shared";
import { ConcreteCannotFindDto } from "@/use-cases/dtos";
import { DtoLoggerProxy } from "@/use-cases/interfaces/proxies";
import {  EditSmartChipUseCase, SmartChipRepository, SmartChipValidationService } from "@/use-cases/interfaces/smart-chip";

export namespace ConcreteEditSmartChipUseCase {
    export interface ConstructorParameters {
        outputPort: EditSmartChipUseCase.OutputPort;
        validationService: SmartChipValidationService.InputPort;
        smartChipRepository: SmartChipRepository.InputPort;
        dtoLogger: DtoLoggerProxy;
    }

    export class UseCase implements EditSmartChipUseCase.InputPort
    {
    	private readonly _outputPort: EditSmartChipUseCase.OutputPort;

    	private readonly _smartChipRepository: SmartChipRepository.InputPort;

    	private readonly _dtoLogger: DtoLoggerProxy;

    	private readonly _validationService: SmartChipValidationService.InputPort;

    	constructor({ outputPort, smartChipRepository, dtoLogger, validationService }: ConstructorParameters)
    	{
    		this._outputPort = outputPort;
    		this._smartChipRepository = smartChipRepository;
    		this._dtoLogger = dtoLogger;
    		this._validationService = validationService;
    	}

    	public async Edit({ id, label, prefix }: EditSmartChipUseCase.EditRequestModel): Promise<void>
    	{
    		const compose = Result.compose;

    		if (label !== undefined)
    		{
    			compose.AddHandler(this._validationService.ValidateLabel({ label }).response)
    				.OnFail((response) => this._outputPort.EditResponse({ response: Result.Fail(this._dtoLogger.ProxyInfo(response)) }));
    		}

    		if (prefix !== undefined)
    		{
    			compose.AddHandler(this._validationService.ValidatePrefix({ prefix }).response).OnFail((response) => this._outputPort.EditResponse({ response: Result.Fail(this._dtoLogger.ProxyInfo(response)) }));
    		}

    		if (compose.someFailed)
    		{
    			return;
    		}

    		const { response: idResponse } = await this._smartChipRepository.Get({ id });
    		if (!idResponse.ok)
    		{
    			return this._outputPort.EditResponse({
    				response: Result.Fail(new ConcreteCannotFindDto.Dto({
    					code: EditSmartChipUseCase.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: 'id',
    					searchValue: id,
    					message: `Cannot edit SmartChip entity with id ${id}, because it was not found.`,
    					entityName: "SmartChip"
    				}))
    			});
    		}

    		const persistedSmartChip = idResponse.value;
    		persistedSmartChip.entity.label = label ?? persistedSmartChip.entity.label;
    		persistedSmartChip.entity.prefix = prefix ?? persistedSmartChip.entity.prefix;

    		const { response: editResult } = await this._smartChipRepository.Edit({ smartChip: persistedSmartChip });
    		if (!editResult.ok)
    		{
    			return this._outputPort.EditResponse({
    				response: Result.Fail(new ConcreteCannotFindDto.Dto({
    					code: EditSmartChipUseCase.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: 'id',
    					searchValue: id,
    					message: `Cannot edit SmartChip entity with id ${id}, because it was not found.`,
    					entityName: "SmartChip"
    				}))
    			});
    		}

    		return this._outputPort.EditResponse({ response: Result.Ok(persistedSmartChip) });
    	}
    }
}
