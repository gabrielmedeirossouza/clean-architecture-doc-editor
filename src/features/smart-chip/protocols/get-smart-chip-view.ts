import { ISmartChipViewModel } from "./smart-chip-view-model";

export interface IGetSmartChipView {
    RenderSuccess(viewModel: ISmartChipViewModel): void
    RenderMessage(message: string): void
}

