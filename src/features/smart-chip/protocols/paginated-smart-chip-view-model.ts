import { ISmartChipViewModel } from "./smart-chip-view-model";

export interface IPaginatedSmartChipViewModel {
    readonly currentPage: number;
    readonly totalPages: number;
    readonly limit: number;
    readonly totalItems: number;
    readonly items: ISmartChipViewModel[];
}
