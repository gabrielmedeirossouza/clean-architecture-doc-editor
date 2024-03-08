import { MessageDto, NumberOutsideRangeErrorDto, Result } from "@/shared";

export interface IPaginatedEntity<T> {
    readonly currentPage: number;
    readonly totalPages: number;
    readonly limit: number;
    readonly totalItems: number;
    readonly items: T[];
    PreviousPage(): Result<void, MessageDto<"NO_PREVIOUS_PAGE">>;
    NextPage(): Result<void, MessageDto<"NO_NEXT_PAGE">>;
    FirstPage(): Result<void, MessageDto<"ALREADY_FIRST_PAGE">>;
    LastPage(): Result<void, MessageDto<"ALREADY_LAST_PAGE">>;
    GoToPage(page: number): Result<void, NumberOutsideRangeErrorDto<"PAGE_OUTSIDE_RANGE">>;
    SetLimit(limit: number): Result<void, NumberOutsideRangeErrorDto<"LIMIT_OUTSIDE_RANGE">>;
}
