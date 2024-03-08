import { Dto } from "./dto";

export class MessageDto<const T> implements Dto {
    public readonly dtoName = "MessageDto";

    constructor(public readonly code: T, public readonly message: string) { }
}
