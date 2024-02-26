import { ISmartChipViewModel } from "./view-model";

export interface ICreateSmartChipView {
    RenderSuccess(viewModel: ISmartChipViewModel): void
    RenderFieldError(field: "label" | "prefix", message: string): void
    RenderMessage(message: string): void
}
