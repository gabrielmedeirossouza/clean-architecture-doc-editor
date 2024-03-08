import { Dto } from "./dto";

export class CannotFindDto<const T> implements Dto {
    public readonly dtoName = "CannotFindDto";
    public readonly message: string;

    constructor(
        public readonly code: T,
        public readonly searchCriteria: string,
        public readonly searchValue: string,
        public readonly resourceName: string,
        message?: string,
    ) {
        this.message = message ?? `Cannot find "${resourceName}" based on the search criteria "${searchCriteria}" and the search value "${searchValue}".`;
    }
}
