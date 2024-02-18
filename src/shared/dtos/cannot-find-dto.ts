export class CannotFindDto<T>
{
	public readonly dtoName = "CannotFindDto";

	constructor(
        public readonly code: T,
        public readonly searchCriteria: string,
        public readonly searchValue: string,
        public readonly resourceName: string,
        public readonly message?: string,
	)
	{
		this.message = message ?? `Cannot find "${resourceName}" based on the search criteria "${searchCriteria}" and the search value "${searchValue}".`;
	}
}
