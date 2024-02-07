import { ILogger } from "@/use-cases/interfaces/logger";

export class LoggerDummy implements ILogger
{
	public readonly enabled = false;

	public LogInfo(): void
	{}

	public LogError(): void
	{}
}
