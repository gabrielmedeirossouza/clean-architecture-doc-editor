export class NumberTooSmallErrorDto<T>
{
	public readonly dtoName = "NumberTooSmallErrorDto";

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: number,
        public readonly minValue: number,
        public readonly message?: string
	)
	{
		this.message = message ?? `Field "${fieldName}" with value "${value}" cannot be smaller than "${minValue}".`;
	}
}
