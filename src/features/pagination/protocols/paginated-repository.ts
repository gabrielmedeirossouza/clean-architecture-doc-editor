import { MessageDto, NumberOutsideRangeErrorDto, Result } from "@/shared";
import { PaginatedEntity } from "@/features/pagination/entities";
import { PersistedDto } from "@/features/@dtos";

export interface IPaginatedRepository<T> {
    FirstPage(): Result<PaginatedEntity<PersistedDto<T>>, MessageDto<"ALREADY_FIRST_PAGE">>;
    LastPage(): Result<PaginatedEntity<PersistedDto<T>>, MessageDto<"ALREADY_LAST_PAGE">>;
    PreviousPage(): Result<PaginatedEntity<PersistedDto<T>>, MessageDto<"ALREADY_FIRST_PAGE">>;
    NextPage(): Result<PaginatedEntity<PersistedDto<T>>, MessageDto<"ALREADY_LAST_PAGE">>;
    GoToPage(page: number): Result<PaginatedEntity<PersistedDto<T>>, NumberOutsideRangeErrorDto<"PAGE_OUTSIDE_RANGE">>;
}
