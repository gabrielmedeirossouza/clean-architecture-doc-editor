import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChip } from "@/entities/protocols/smart-chip";

export interface IListSmartChipUseCaseInputPort {
    List(): void;
}

export interface IListSmartChipUseCaseOutputPort {
    ListResponse(result: IPersistedEntity<ISmartChip>[]): void;
}
