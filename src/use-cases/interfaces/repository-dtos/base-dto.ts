import { IRepositoryEntityNotFoundErrorDTO } from "./repository-entity-not-found-error-dto";
import { IRepositoryCannotFindDTO } from './repository-cannot-find-dto';

export interface IBaseDTO {
    readonly message: string;
    IsRepositoryEntityNotFoundErrorDTO(): this is IRepositoryEntityNotFoundErrorDTO;
    IsRepositoryCannotFindDTO(): this is IRepositoryCannotFindDTO;
}
