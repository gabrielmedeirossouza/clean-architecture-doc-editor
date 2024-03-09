import { IPaginatedSmartChipViewModel } from "./paginated-smart-chip-view-model";

export interface IListSmartChipView {
    RenderSuccess(viewModelList: IPaginatedSmartChipViewModel): void
}
