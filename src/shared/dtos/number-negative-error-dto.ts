export class NumberNegativeErrorDto<T>
{
	public readonly dtoName = "NumberNegativeErrorDto";

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: number,
        public readonly message?: string
	)
	{
		this.message = message ?? `Field "${fieldName}" with value "${value}" is negative.`;
	}
}
