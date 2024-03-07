import { ILog } from "@/features/log/protocols";
import { ILogger } from "./protocols";

export class Logger implements ILogger {
    constructor(
        private readonly log: ILog,
        private readonly resourceName: string
    ) { }

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
