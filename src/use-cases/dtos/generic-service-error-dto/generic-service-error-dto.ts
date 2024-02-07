import { ILogger } from "@/use-cases/interfaces/logger";
import { MessageDTO } from "../message-dto/message-dto";

export interface IGenericServiceErrorDTOConstructorParameters {
    logger: ILogger;
}

export class GenericServiceErrorDTO extends MessageDTO
{
	constructor({ logger }: IGenericServiceErrorDTOConstructorParameters)
	{
		super({ message: "GenericServiceErrorDTO: Generic Service Error.", logger });
	}
}
