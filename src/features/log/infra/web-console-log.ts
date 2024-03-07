import { ILog } from "@/features/log/protocols";

export class WebConsoleLog implements ILog {
    public Info(message: string): void {
        console.info(message);
    }

    public Warn(message: string): void {
        console.warn(message);
    }

    public Error(message: string): void {
        console.error(message);
    }
}
