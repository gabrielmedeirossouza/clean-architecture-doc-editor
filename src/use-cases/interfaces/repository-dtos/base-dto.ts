import { IRepositoryCannotFindDTO } from './repository-cannot-find-dto';

export interface IBaseDTO {
    readonly message: string;
    IsRepositoryCannotFindDTO(): this is IRepositoryCannotFindDTO;
}
