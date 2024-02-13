import { IFieldDTO } from "@/use-cases/interfaces/dtos";

interface IFieldDTOConstructorParameters<T> {
    code: T;
    fieldName: string;
}

export class FieldDTO<T extends string> implements IFieldDTO<T>
{
	public readonly code: T;

	public readonly fieldName: string;

	constructor({ code, fieldName }: IFieldDTOConstructorParameters<T>)
	{
		this.code = code;
		this.fieldName = fieldName;
	}
}
