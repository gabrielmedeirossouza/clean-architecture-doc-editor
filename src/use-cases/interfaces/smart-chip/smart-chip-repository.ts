import { Result } from "@/shared/result";
import { IMessageDTO } from "../dtos";
import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";

export interface ISmartChipRepository {
    Create(smartChip: ISmartChip): Promise<Result<string, IMessageDTO>>;
    Edit(smartChip: IPersistedEntity<ISmartChip>): Promise<Result<string, IMessageDTO>>;
    Delete(id: string): Promise<Result<string, IMessageDTO>>;
    GetSmartChipById(id: string): Promise<Result<IPersistedEntity<ISmartChip>, IMessageDTO>>;
    GetSmartChips(): Promise<Result<IPersistedEntity<ISmartChip>[], IMessageDTO>>;
}

