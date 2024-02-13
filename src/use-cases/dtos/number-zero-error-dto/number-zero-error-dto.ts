import { INumberZeroErrorDTO } from "@/use-cases/interfaces/dtos";

interface INumberZeroErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
}

export class NumberZeroErrorDTO<T extends string> implements INumberZeroErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly message: string;

	constructor({ code, fieldName }: INumberZeroErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.message = `NumberZeroErrorDTO: Field "${fieldName}" with value "0" is not allowed.`;
	}
}
