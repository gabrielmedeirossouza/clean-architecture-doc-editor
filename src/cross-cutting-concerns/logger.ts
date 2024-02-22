import { ILog } from "./protocols/log";
import { ILogger } from "./protocols/logger";

export class Logger implements ILogger {
	constructor(private readonly log: ILog, private readonly resourceName: string) {}

	public Info(message: string): void {
		this.log.Info(`${this.resourceName}: ${message}`);
	}

	public Warn(message: string): void {
		this.log.Warn(`${this.resourceName}: ${message}`);
	}

	public Error(message: string): void {
		this.log.Error(`${this.resourceName}: ${message}`);
	}
}
