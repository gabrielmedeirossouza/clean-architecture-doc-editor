export class StringTooShortErrorDto<T>
{
	public readonly dtoName = "StringTooShortErrorDto";

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: string,
        public readonly minLength: number,
        public readonly message?: string
	)
	{
		this.message = message ?? `Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is shorter than the minimum length of "${minLength}".`;
	}
}
