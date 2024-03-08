import { Dto } from "./dto";

export class StringTooLongErrorDto<const T> implements Dto {
    public readonly dtoName = "StringTooLongErrorDto";
    public readonly message: string;

    constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: string,
        public readonly maxLength: number,
        message?: string
    ) {
        this.message = message ?? `Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is longer than the maximum length of "${maxLength}".`;
    }
}
