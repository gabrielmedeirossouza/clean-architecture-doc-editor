export class MessageDto<T>
{
	public readonly dtoName = "MessageDto";

	constructor(public readonly code: T, public readonly message: string)
	{}
}
