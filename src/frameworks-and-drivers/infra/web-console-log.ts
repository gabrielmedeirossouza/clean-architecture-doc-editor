import { ILog } from "@/cross-cutting-concerns/protocols/log";

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
