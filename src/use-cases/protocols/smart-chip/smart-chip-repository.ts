import { CannotFindDto, Result } from "@/shared";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChip } from "@/entities/protocols/smart-chip";

export interface ISmartChipRepository {
    Create(smartChip: ISmartChip): Promise<Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>>;
    Edit(smartChip: IPersistedEntity<ISmartChip>): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>;
    Remove(id: string): Promise<Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">>>;
    Get(id: string): Promise<Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>>;
    GetByLabel(label: string): Promise<Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>>;
    GetByPrefix(prefix: string): Promise<Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND">>>;
    List(): Promise<IPersistedEntity<ISmartChip>[]>;
}
