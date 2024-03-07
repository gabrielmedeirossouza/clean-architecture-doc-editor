import { Dto } from "./dto";

export class NumberOutsideRangeErrorDto<const T = any> implements Dto {
    public readonly dtoName = "NumberOutsideRangeErrorDto";
    public readonly message: string;

    constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: number,
        public readonly minValue: number,
        public readonly maxValue: number,
        message?: string
    ) {
        this.message = message ?? `Field "${fieldName}" with value "${value}" is outside the range of "${minValue}" and "${maxValue}".`;
    }
}
