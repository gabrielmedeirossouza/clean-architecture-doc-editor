import { MessageDto } from "./message-dto";

export class GenericServiceErrorDto extends MessageDto<"GENERIC_SERVICE_ERROR"> {
    constructor() {
        super("GENERIC_SERVICE_ERROR", "Generic Service Error.");
    }
}
