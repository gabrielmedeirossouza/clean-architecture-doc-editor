export interface ILogger {
    readonly enabled: boolean;
    Log(message: string): void;
    Enable(): void;
    Disable(): void;
}
