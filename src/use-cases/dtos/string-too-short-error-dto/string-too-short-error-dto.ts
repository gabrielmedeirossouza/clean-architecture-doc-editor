import { IStringTooShortErrorDTO } from "@/use-cases/interfaces/dtos";

interface IStringTooShortErrorDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
    value: string;
    minLength: number;
}

export class StringTooShortErrorDTO<T extends string> implements IStringTooShortErrorDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	public readonly value: string;

	public readonly minLength: number;

	public readonly message: string;

	constructor({ code, fieldName, value, minLength }: IStringTooShortErrorDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
		this.value = value;
		this.minLength = minLength;
		this.message =
            `StringTooShortErrorDTO: Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is shorter than the minimum length of "${minLength}".`;
	}
}
