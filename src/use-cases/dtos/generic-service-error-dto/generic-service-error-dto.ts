import { MessageDTO } from "../message-dto/message-dto";

export class GenericServiceErrorDTO extends MessageDTO
{
	constructor()
	{
		super({ message: "GenericServiceErrorDTO: Generic Service Error." });
	}
}
