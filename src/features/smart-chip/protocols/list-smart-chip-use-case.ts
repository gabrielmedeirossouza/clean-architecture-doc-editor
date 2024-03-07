import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChipEntity } from "./smart-chip-entity";

export interface IListSmartChipUseCaseInputPort {
    List(): void;
}

export interface IListSmartChipUseCaseOutputPort {
    ListResponse(result: IPersistedEntity<ISmartChipEntity>[]): void;
}
