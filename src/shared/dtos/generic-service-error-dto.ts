import { MessageDto } from "./message-dto";

export class GenericServiceErrorDto extends MessageDto<"GENERIC_SERVICE_ERROR">
{
	public readonly code = "GENERIC_SERVICE_ERROR";
	public readonly message = "Generic Service Error.";
}
