import { PaginatedEntity, PersistedEntity } from "@/features/entities";
import { SmartChipEntity } from "@/features/smart-chip/entities";

export interface IListSmartChipUseCaseInputPort {
    List(page: number, limit: number): void;
}

export interface IListSmartChipUseCaseOutputPort {
    ListResponse(result: PaginatedEntity<PersistedEntity<SmartChipEntity>>): void;
}
