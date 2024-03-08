import { IPaginatedEntity, IPersistedEntity } from "@/features/entities/protocols";
import { ISmartChipEntity } from "./smart-chip-entity";

export interface IListSmartChipUseCaseInputPort {
    List(page: number, limit: number): void;
}

export interface IListSmartChipUseCaseOutputPort {
    ListResponse(result: IPaginatedEntity<IPersistedEntity<ISmartChipEntity>>): void;
}
