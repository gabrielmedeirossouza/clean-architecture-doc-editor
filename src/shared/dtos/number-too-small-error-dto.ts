import { Dto } from "./dto";

export class NumberTooSmallErrorDto<const T = any> implements Dto {
    public readonly dtoName = "NumberTooSmallErrorDto";
    public readonly message: string;

    constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: number,
        public readonly minValue: number,
        message?: string
    ) {
        this.message = message ?? `Field "${fieldName}" with value "${value}" cannot be smaller than "${minValue}".`;
    }
}
