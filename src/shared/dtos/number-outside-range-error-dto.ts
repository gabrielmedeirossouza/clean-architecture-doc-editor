export class NumberOutsideRangeErrorDto<T>
{
	public readonly dtoName = "NumberOutsideRangeErrorDto";

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: number,
        public readonly minValue: number,
        public readonly maxValue: number,
        public readonly message?: string
	)
	{
		this.message = message ?? `Field "${fieldName}" with value "${value}" is outside the range of "${minValue}" and "${maxValue}".`;
	}
}
