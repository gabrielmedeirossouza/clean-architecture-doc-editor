import { Dto } from "./dto";

export class SuccessDto<const T> implements Dto {
	public readonly dtoName = "SuccessDto";

	constructor(
        public readonly data: T,
        public readonly message: string
	) { }
}
