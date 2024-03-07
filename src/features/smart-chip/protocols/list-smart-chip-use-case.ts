import { IPersistedEntity } from "@/features/entities/protocols";
import { ISmartChipEntity } from "./smart-chip-entity";

export interface IListSmartChipUseCaseInputPort {
    List(): void;
}

export interface IListSmartChipUseCaseOutputPort {
    ListResponse(result: IPersistedEntity<ISmartChipEntity>[]): void;
}
