import { CannotFindDto, Result } from "@/shared";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChip } from "@/entities/protocols/smart-chip";

export interface ISmartChipRepository {
    Create(smartChip: ISmartChip): string;
    Edit(smartChip: IPersistedEntity<ISmartChip>): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND"> >;
    Remove(id: string): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND"> >;
    Get(id: string): Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND"> >;
    GetByLabel(label: string): Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND"> >;
    GetByPrefix(prefix: string): Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND"> >;
    List(): IPersistedEntity<ISmartChip>[];
}
