import { Result } from "@/shared/result";
import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";

export interface ISmartChipRepository {
    Create(smartChip: ISmartChip): Promise<Result<string, void>>;
    Edit(smartChip: IPersistedEntity<ISmartChip>): Promise<Result<string, void>>;
    Remove(id: string): Promise<Result<string, void>>;
    GetSmartChipById(id: string): Promise<Result<IPersistedEntity<ISmartChip>, void>>;
    GetSmartChips(): Promise<Result<IPersistedEntity<ISmartChip>[], void>>;
    FindByLabel(label: string): Promise<Result<IPersistedEntity<ISmartChip>, void>>;
    FindByPrefix(prefix: string): Promise<Result<IPersistedEntity<ISmartChip>, void>>;
    FindByPosition(position: number): Promise<Result<IPersistedEntity<ISmartChip>, void>>;
}
