import { PersistedDto } from "@/features/@dtos";
import { PaginatedEntity } from "@/features/pagination/entities";
import { MessageDto, NumberOutsideRangeErrorDto, Result } from "@/shared";

export interface IPaginateUseCaseInputPort {
    FirstPage(): void;
    LastPage(): void;
    PreviousPage(): void;
    NextPage(): void;
    GoToPage(page: number): void;
}

export type IPageResponseResult<T> = Result<
    PaginatedEntity<PersistedDto<T>>,
    MessageDto<"ALREADY_FIRST_PAGE"> |
    MessageDto<"ALREADY_LAST_PAGE"> |
    MessageDto<"NO_NEXT_PAGE"> |
    MessageDto<"NO_PREVIOUS_PAGE"> |
    NumberOutsideRangeErrorDto<"PAGE_OUTSIDE_RANGE">
>;

export interface IPaginateUseCaseOutputPort<T> {
    PageResponse(result: IPageResponseResult<T>): void;
}
