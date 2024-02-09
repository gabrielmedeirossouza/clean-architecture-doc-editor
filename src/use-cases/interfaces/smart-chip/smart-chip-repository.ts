import { Result } from "@/shared/result";
import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";
import { IRepositoryCannotFindDTO } from "../repository-dtos";

export interface ISmartChipRepository {
    Create(smartChip: ISmartChip): Promise<string>;
    Edit(smartChip: IPersistedEntity<ISmartChip>): Promise<Result<string, IRepositoryCannotFindDTO>>;
    Remove(id: string): Promise<Result<string, IRepositoryCannotFindDTO>>;
    GetSmartChipById(id: string): Promise<Result<IPersistedEntity<ISmartChip>, IRepositoryCannotFindDTO>>;
    GetSmartChipList(): Promise<IPersistedEntity<ISmartChip>[]>;
    FindByLabel(label: string): Promise<Result<IPersistedEntity<ISmartChip>, IRepositoryCannotFindDTO>>;
    FindByPrefix(prefix: string): Promise<Result<IPersistedEntity<ISmartChip>, IRepositoryCannotFindDTO>>;
    FindByPosition(position: number): Promise<Result<IPersistedEntity<ISmartChip>, IRepositoryCannotFindDTO>>;
}
