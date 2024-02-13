import { IMessageDTO } from "@/use-cases/interfaces/dtos";

interface IMessageDTOConstructorParameters<T> {
    code: T;
    message: string;
}

export class MessageDTO<T extends string> implements IMessageDTO<T>
{
	public readonly code: T;

	public readonly message: string;

	constructor({ code, message }: IMessageDTOConstructorParameters<T>)
	{
		this.code = code;
		this.message = message;
	}
}
