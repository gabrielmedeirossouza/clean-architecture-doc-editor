import { ISmartChipViewModel } from "./smart-chip-view-model";

export interface IListSmartChipView {
    RenderSuccess(viewModelList: ISmartChipViewModel[]): void
}

