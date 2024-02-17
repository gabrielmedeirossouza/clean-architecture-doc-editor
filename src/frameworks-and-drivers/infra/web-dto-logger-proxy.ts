import { MessageDto } from "@/use-cases/interfaces/dtos";
import { DtoLoggerProxy } from "@/use-cases/interfaces/proxies/dto-logger-proxy";

export namespace ConcreteWebDtoLoggerProxy
{
    export interface ConstructorParameters
    {
        origin: string;
        logInfoEnabled?: boolean;
        logErrorEnabled?: boolean;
    }

    export class Proxy implements DtoLoggerProxy
    {
    	public readonly origin: string;

    	private _logInfoEnabled: boolean;

    	private _logErrorEnabled: boolean;

    	constructor({ origin, logInfoEnabled = true, logErrorEnabled = true }: ConstructorParameters)
    	{
    		this.origin = origin;
    		this._logInfoEnabled = logInfoEnabled;
    		this._logErrorEnabled = logErrorEnabled;
    	}

    	public ProxyInfo<T extends MessageDto<any>>(dto: T): T
    	{
    		if (this._logInfoEnabled)
    		{
    			console.info(dto.message);
    		}

    		return dto;
    	}

    	public ProxyError<T extends MessageDto<any>>(dto: T): T
    	{
    		if (this._logErrorEnabled)
    		{
    			console.error(dto.message);
    		}

    		return dto;
    	}
    }
}

