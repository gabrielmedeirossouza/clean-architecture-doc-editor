import { ILogger } from "@/use-cases/interfaces/logger";

export class LoggerDummy implements ILogger
{
	public readonly enabled = false;

	public Log(): void
	{}

	public Enable(): void
	{}

	public Disable(): void
	{}
}
