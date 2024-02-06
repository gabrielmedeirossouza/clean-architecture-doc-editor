import { MessageDTO } from "./message-dto";

export class GenericServiceErrorDTO extends MessageDTO {
	public readonly message = "Generic Service Error";
}
