import { Observable } from "@/cross-cutting-concerns";
import { SmartChipViewModel } from "./view-model";

export namespace ListSmartChipPresenter {
    export interface OutputPort {
        listResponse?: Observable<SmartChipViewModel[]>;
    }
}
