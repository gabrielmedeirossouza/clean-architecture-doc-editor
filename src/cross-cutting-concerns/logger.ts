import { ILog } from "./protocols/log-protocol";
import { ILogger } from "./protocols/logger-protocol";

export class Logger implements ILogger
{
	constructor(private readonly log: ILog)
	{}

	public Info({ message }: { message: string; }): void
	{
		this.log.Info(message);
	}

	public Warn({ message }: { message: string; }): void
	{
		this.log.Warn(message);
	}

	public Error({ message }: { message: string; }): void
	{
		this.log.Error(message);
	}
}
