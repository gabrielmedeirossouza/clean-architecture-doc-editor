import { Result } from "@/shared";
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
    	private readonly outputPort: CreateSmartChipUseCase.OutputPort;
    	private readonly smartChipValidationService: SmartChipValidationService.InputPort;
    	private readonly dtoLogger: DtoLoggerProxy;
    	private readonly smartChipRepository: SmartChipRepository.InputPort;

    	constructor({ outputPort, smartChipValidationService, dtoLogger, smartChipRepository }: ConstructorParameters)
    	{
    		this.outputPort = outputPort;
    		this.smartChipValidationService = smartChipValidationService;
    		this.dtoLogger = dtoLogger;
    		this.smartChipRepository = smartChipRepository;
    	}

    	public async Create({ label, prefix }: CreateSmartChipUseCase.CreateRequestModel): Promise<void>
    	{
    		const composeFields = Result.compose
    			.AddHandler(this.smartChipValidationService.ValidateLabel({ label }).response)
    			.OnFail((response) => this.outputPort.CreateResponse({ response: Result.Fail(this.dtoLogger.ProxyInfo(response)) }))
    			.Handle()
    			.AddHandler(this.smartChipValidationService.ValidatePrefix({ prefix }).response)
    			.OnFail((response) => this.outputPort.CreateResponse({ response: Result.Fail(this.dtoLogger.ProxyInfo(response)) }))
    			.Handle();

    		if (composeFields.someFailed)
    		{
    			return;
    		}

    		const [labelResult, prefixResult] = await Promise.all([
    			this.smartChipRepository.FindByLabel({ label }),
    			this.smartChipRepository.FindByPrefix({ prefix }),
    		]);

    		const composeFinds = Result.compose
    			.AddHandler(labelResult.response)
    			.OnOk(() => this.outputPort.CreateResponse({
    				response: Result.Fail(this.dtoLogger.ProxyInfo(new ConcreteMessageDto.Dto({
    					code: CreateSmartChipUseCase.Code.LABEL_ALREADY_EXISTS,
    					message: `Cannot create SmartChip entity, because a SmartChip with label "${label}" already exists.`
    				})))
    			}))
    			.Handle()
    			.AddHandler(prefixResult.response)
    			.OnOk(() => this.outputPort.CreateResponse({
    				response: Result.Fail(this.dtoLogger.ProxyInfo(new ConcreteMessageDto.Dto({
    					code: CreateSmartChipUseCase.Code.PREFIX_ALREADY_EXISTS,
    					message: `Cannot create SmartChip entity, because a SmartChip with prefix "${prefix}" already exists.`
    				})))
    			}))
    			.Handle();

    		if (!composeFinds.someFailed)
    		{
    			return;
    		}

    		const smartChip = new ConcreteSmartChip.Entity({ label, prefix });
    		const { response: idResponse } = await this.smartChipRepository.Create({ smartChip });
    		if (!idResponse.ok)
    		{
    			return this.outputPort.CreateResponse({ response: Result.Fail(this.dtoLogger.ProxyInfo(new ConcreteGenericServiceErrorDto.Dto({ code: CreateSmartChipUseCase.Code.GENERIC_SERVICE_ERROR }))) });
    		}

    		const persistedSmartChip = new ConcretePersistedEntity.Entity({ id: idResponse.value, entity: smartChip });

    		return this.outputPort.CreateResponse({ response: Result.Ok(persistedSmartChip) });
    	}
    }
}

