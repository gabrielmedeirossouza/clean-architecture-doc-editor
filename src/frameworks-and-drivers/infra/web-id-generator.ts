import { IIdGenerator } from "@/interface-adapters/interfaces/id-generator";

export class WebIdGenerator implements IIdGenerator
{
	public GenerateId(): string
	{
		return crypto.randomUUID();
	}
}
