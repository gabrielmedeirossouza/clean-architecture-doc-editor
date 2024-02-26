import { Dto } from "./dto";

export class StringTooShortErrorDto<const T = any> implements Dto {
	public readonly dtoName = "StringTooShortErrorDto";
	public readonly message: string;

	constructor(
        public readonly code: T,
        public readonly fieldName: string,
        public readonly value: string,
        public readonly minLength: number,
        message?: string
	) {
		this.message = message ?? `Field "${fieldName}" with value "${value}" has a length of "${value.length}" which is shorter than the minimum length of "${minLength}".`;
	}
}
