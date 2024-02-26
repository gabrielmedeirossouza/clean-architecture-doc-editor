import { ISmartChipViewModel } from "@/interface-adapters/protocols/views/smart-chip-view/view-model";

export interface IListSmartChipPresenterOutput {
    listOutput(output: ISmartChipViewModel[]): void;
}
