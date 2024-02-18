export class StringTooLongErrorDto<T>
{
	public readonly dtoName = "StringTooLongErrorDto";

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: string,
        public readonly maxLength: number,
        public readonly message?: string
	)
	{
		this.message = message ?? `Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is longer than the maximum length of "${maxLength}".`;
	}
}
