import { MessageDTO } from "../message-dto/message-dto";

export class GenericServiceErrorDTO extends MessageDTO<"GENERIC_SERVICE_ERROR">
{
	constructor()
	{
		super({ code: "GENERIC_SERVICE_ERROR", message: "GenericServiceErrorDTO: Generic Service Error." });
	}
}
