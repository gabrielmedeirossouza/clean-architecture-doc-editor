import { IPaginatedEntity } from "@/features/entities/protocols";
import { ISmartChipViewModel } from "./smart-chip-view-model";

export interface IListSmartChipView {
    RenderSuccess(viewModelList: IPaginatedEntity<ISmartChipViewModel>): void
}
