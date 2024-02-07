import { ILogger } from "@/use-cases/interfaces/logger";

export interface IWebContextLoggerConstructorParameters {
    enabled?: boolean;
}

export class WebContextLogger implements ILogger
{
	private _enabled: boolean;

	constructor({ enabled = true }: IWebContextLoggerConstructorParameters)
	{
		this._enabled = enabled;
	}

	public get enabled(): boolean
	{
		return this._enabled;
	}

	public Log(message: string): void
	{
		if (this._enabled)
		{
			console.log(message);
		}
	}

	public Enable(): void
	{
		this._enabled = true;
	}

	public Disable(): void
	{
		this._enabled = false;
	}
}
