export interface ILogger {
    Info(message: string): void
    Warn(message: string): void
    Error(message: string): void
}
