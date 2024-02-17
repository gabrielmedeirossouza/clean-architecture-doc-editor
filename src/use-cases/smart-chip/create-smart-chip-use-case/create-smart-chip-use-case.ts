import { Result } from "@/cross-cutting-concerns";
import { ConcretePersistedEntity, ConcreteSmartChip } from "@/entities/smart-chip";
import { ConcreteGenericServiceErrorDto, ConcreteMessageDto } from "@/use-cases/dtos";
import { DtoLoggerProxy } from "@/use-cases/interfaces/proxies/dto-logger-proxy";
import { CreateSmartChipUseCase, SmartChipRepository, SmartChipValidationService } from "@/use-cases/interfaces/smart-chip";

export namespace ConcreteCreateSmartChipUseCase {
    export interface ConstructorParameters {
        dtoLogger: DtoLoggerProxy;
        outputPort: CreateSmartChipUseCase.OutputPort;
        smartChipValidationService: SmartChipValidationService.InputPort;
        smartChipRepository: SmartChipRepository.InputPort;
    }

    export class UseCase implements CreateSmartChipUseCase.InputPort
    {
    	private readonly _outputPort: CreateSmartChipUseCase.OutputPort;

    	private readonly _smartChipValidationService: SmartChipValidationService.InputPort;

    	private readonly _dtoLogger: DtoLoggerProxy;

    	private readonly _smartChipRepository: SmartChipRepository.InputPort;

    	constructor({ outputPort, smartChipValidationService, dtoLogger, smartChipRepository }: ConstructorParameters)
    	{
    		this._outputPort = outputPort;
    		this._smartChipValidationService = smartChipValidationService;
    		this._dtoLogger = dtoLogger;
    		this._smartChipRepository = smartChipRepository;
    	}

    	public async Create({ label, prefix }: CreateSmartChipUseCase.CreateRequestModel): Promise<void>
    	{
    		const composeFields = Result.compose
    			.AddHandler(this._smartChipValidationService.ValidateLabel({ label }).response)
    			.OnSecondary((response) => this._outputPort.CreateResponse({ response: Result.Secondary(this._dtoLogger.ProxyInfo(response)) }))
    			.Handle()
    			.AddHandler(this._smartChipValidationService.ValidatePrefix({ prefix }).response)
    			.OnSecondary((response) => this._outputPort.CreateResponse({ response: Result.Secondary(this._dtoLogger.ProxyInfo(response)) }))
    			.Handle();

    		if (composeFields.hasSecondary)
    		{
    			return;
    		}

    		const [labelResult, prefixResult] = await Promise.all([
    			this._smartChipRepository.FindByLabel({ label }),
    			this._smartChipRepository.FindByPrefix({ prefix }),
    		]);

    		const composeFinds = Result.compose
    			.AddHandler(labelResult.response)
    			.OnPrimary(() => this._outputPort.CreateResponse({
    				response: Result.Secondary(this._dtoLogger.ProxyInfo(new ConcreteMessageDto.Dto({
    					code: CreateSmartChipUseCase.Code.LABEL_ALREADY_EXISTS,
    					message: `Cannot create SmartChip entity, because a SmartChip with label "${label}" already exists.`
    				})))
    			}))
    			.Handle()
    			.AddHandler(prefixResult.response)
    			.OnPrimary(() => this._outputPort.CreateResponse({
    				response: Result.Secondary(this._dtoLogger.ProxyInfo(new ConcreteMessageDto.Dto({
    					code: CreateSmartChipUseCase.Code.PREFIX_ALREADY_EXISTS,
    					message: `Cannot create SmartChip entity, because a SmartChip with prefix "${prefix}" already exists.`
    				})))
    			}))
    			.Handle();

    		if (!composeFinds.hasSecondary)
    		{
    			return;
    		}

    		const smartChip = new ConcreteSmartChip.Entity({ label, prefix });
    		const { response: idResponse } = await this._smartChipRepository.Create({ smartChip });
    		if (!idResponse.isPrimary)
    		{
    			return this._outputPort.CreateResponse({ response: Result.Secondary(this._dtoLogger.ProxyInfo(new ConcreteGenericServiceErrorDto.Dto({ code: CreateSmartChipUseCase.Code.GENERIC_SERVICE_ERROR }))) });
    		}

    		const persistedSmartChip = new ConcretePersistedEntity.Entity({ id: idResponse.primaryValue, entity: smartChip });

    		return this._outputPort.CreateResponse({ response: Result.Primary(persistedSmartChip) });
    	}
    }
}

