import { Observable } from "@/shared";
import { SmartChipViewModel } from "./view-model";

export namespace ListSmartChipPresenter {
    export interface OutputPort {
        listResponse?: Observable<SmartChipViewModel[]>;
    }
}
