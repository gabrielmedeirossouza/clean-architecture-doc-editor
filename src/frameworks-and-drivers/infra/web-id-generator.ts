import { IUuidGenerator } from "@/interface-adapters/protocols/uuid-generator";

export class WebUuidGenerator implements IUuidGenerator
{
	public GenerateUuidV4(): string
	{
		return crypto.randomUUID();
	}
}
