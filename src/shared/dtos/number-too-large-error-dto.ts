export class NumberTooLargeDto<T>
{
	public readonly dtoName = "NumberTooLargeDto";

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: number,
        public readonly maxValue: number,
        public readonly message?: string
	)
	{
		this.message =  message ?? `Field "${fieldName}" with value "${value}" cannot be larger than "${maxValue}".`;
	}
}
