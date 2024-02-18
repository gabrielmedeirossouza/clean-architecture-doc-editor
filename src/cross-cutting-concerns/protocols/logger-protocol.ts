export interface ILogger {
    Info(data: { message: string }): void
    Warn(data: { message: string }): void
    Error(data: { message: string }): void
}
