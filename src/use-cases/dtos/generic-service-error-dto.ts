import { MessageDTO } from "./message-dto";

export class GenericServiceErrorDTO extends MessageDTO {
	constructor() {
		super("GenericServiceErrorDTO: Generic Service Error.");
	}
}
