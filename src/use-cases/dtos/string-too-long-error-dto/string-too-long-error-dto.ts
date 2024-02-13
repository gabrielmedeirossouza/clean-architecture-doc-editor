import { IStringTooLongErrorDTO } from "@/use-cases/interfaces/dtos";

interface IStringTooLongErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    value: string;
    maxLength: number;
}

export class StringTooLongErrorDTO<T extends string> implements IStringTooLongErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly value: string;

	public readonly maxLength: number;

	public readonly message: string;

	constructor({ code, fieldName, value, maxLength }: IStringTooLongErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.value = value;
		this.maxLength = maxLength;
		this.message =
            `StringTooLongErrorDTO: Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is longer than the maximum length of "${maxLength}".`;
	}
}
