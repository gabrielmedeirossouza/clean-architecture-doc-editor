import { Dto } from "./dto";

export class NumberNegativeErrorDto<const T = any> implements Dto {
	public readonly dtoName = "NumberNegativeErrorDto";
	public readonly message: string;

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: number,
        message?: string
	) {
		this.message = message ?? `Field "${fieldName}" with value "${value}" is negative.`;
	}
}
