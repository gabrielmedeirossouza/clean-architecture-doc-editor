import { Observable } from "@/shared";
import { ISmartChipViewModel } from "./view-model";

export interface IListSmartChipPresenterOutputPort {
    listResponse?: Observable<ISmartChipViewModel[]>;
}
