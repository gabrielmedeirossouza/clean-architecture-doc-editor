import { MessageDTO } from "../message-dto/message-dto";

export class GenericServiceErrorDTO extends MessageDTO
{
	constructor()
	{
		super("GenericServiceErrorDTO: Generic Service Error.");
	}
}
