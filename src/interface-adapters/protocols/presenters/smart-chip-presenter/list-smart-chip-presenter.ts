import { Observable } from "@/shared";
import { ISmartChipViewModel } from "./view-model";

export interface IListSmartChipPresenterOutput {
    listOutput?: Observable<ISmartChipViewModel[]>;
}
