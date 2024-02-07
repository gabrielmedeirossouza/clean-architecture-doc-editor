import { ILogger } from "@/use-cases/interfaces/logger";

export interface IWebContextLoggerConstructorParameters {
    logInfoEnabled?: boolean;
    logErrorEnabled?: boolean;
}

export class WebContextLogger implements ILogger
{
	private _logInfoEnabled: boolean;

	private _logErrorEnabled: boolean;

	constructor({ logInfoEnabled = true, logErrorEnabled = true }: IWebContextLoggerConstructorParameters)
	{
		this._logInfoEnabled = logInfoEnabled;
		this._logErrorEnabled = logErrorEnabled;
	}

	public LogInfo(message: string): void
	{
		if (this._logInfoEnabled)
		{
			console.log(message);
		}
	}

	public LogError(message: string): void
	{
		if (this._logErrorEnabled)
		{
			console.error(message);
		}
	}
}
