import { Dto } from "./dto";

export class NumberTooLargeDto<const T = any> implements Dto {
	public readonly dtoName = "NumberTooLargeDto";
	public readonly message: string;

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: number,
        public readonly maxValue: number,
        message?: string
	) {
		this.message =  message ?? `Field "${fieldName}" with value "${value}" cannot be larger than "${maxValue}".`;
	}
}
