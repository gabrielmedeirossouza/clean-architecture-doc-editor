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
    PaginatedEntity<T>,
    MessageDto<"ALREADY_FIRST_PAGE"> |
    MessageDto<"ALREADY_LAST_PAGE"> |
    NumberOutsideRangeErrorDto<"PAGE_OUTSIDE_RANGE">
>;

export interface IPaginateUseCaseOutputPort<T> {
    PageResponse(result: IPageResponseResult<T>): void;
}
