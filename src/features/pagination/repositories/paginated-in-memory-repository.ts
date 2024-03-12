import { MessageDto, NumberOutsideRangeErrorDto, Result } from "@/shared";
import { PersistedDto } from "@/features/@dtos";
import { IPaginatedRepository } from "@/features/pagination/protocols";
import { PaginatedEntity } from "@/features/pagination/entities";

export class PaginatedInMemoryRepository<T> implements IPaginatedRepository<T> {
    private currentPage: number;
    private totalPages: number;
    private totalItems: number;

    constructor(
        private readonly items: PersistedDto<T>[],
        private _limit = 10
    ) {
        this.currentPage = -1;
        this.totalItems = items.length;
        this.totalPages = Math.ceil(this.totalItems / this._limit);
    }

    public FirstPage(): Result<PaginatedEntity<PersistedDto<T>>, MessageDto<"ALREADY_FIRST_PAGE">> {
        if (this.currentPage === 1) {
            return Result.Fail(new MessageDto("ALREADY_FIRST_PAGE", "Already on the first page"));
        }

        this.UpdateState(1);

        return Result.Ok(this.GetItems());
    }

    public LastPage(): Result<PaginatedEntity<PersistedDto<T>>, MessageDto<"ALREADY_LAST_PAGE">> {
        if (this.currentPage === this.totalPages - 1) {
            return Result.Fail(new MessageDto("ALREADY_LAST_PAGE", "Already on the last page"));
        }

        this.UpdateState(this.totalPages - 1);

        return Result.Ok(this.GetItems());
    }

    public PreviousPage(): Result<PaginatedEntity<PersistedDto<T>>, MessageDto<"ALREADY_FIRST_PAGE">> {
        if (this.currentPage === 1) {
            return Result.Fail(new MessageDto("ALREADY_FIRST_PAGE", "Already on the first page"));
        }

        if (this.currentPage === -1) {
            this.UpdateState(1);

            return Result.Ok(this.GetItems());
        }

        this.UpdateState(this.currentPage - 1);

        return Result.Ok(this.GetItems());
    }

    public NextPage(): Result<PaginatedEntity<PersistedDto<T>>, MessageDto<"ALREADY_LAST_PAGE">> {
        if (this.currentPage === this.totalPages) {
            return Result.Fail(new MessageDto("ALREADY_LAST_PAGE", "Already on the last page"));
        }

        if (this.currentPage === -1) {
            this.UpdateState(1);

            return Result.Ok(this.GetItems());
        }

        this.UpdateState(this.currentPage + 1);

        return Result.Ok(this.GetItems());
    }

    public GoToPage(page: number): Result<PaginatedEntity<PersistedDto<T>>, NumberOutsideRangeErrorDto<"PAGE_OUTSIDE_RANGE">> {
        if (page < 1 || page >= this.totalPages) {
            return Result.Fail(new NumberOutsideRangeErrorDto("PAGE_OUTSIDE_RANGE", "page", page, 0, this.totalPages));
        }

        this.UpdateState(page);

        return Result.Ok(this.GetItems());
    }

    private UpdateState(currentPage: number): void {
        this.currentPage = currentPage;
        this.totalItems = this.items.length;
        this.totalPages = Math.ceil(this.totalItems / this._limit);
    }

    private GetItems(): PaginatedEntity<PersistedDto<T>> {
        const items = this.items.slice((this.currentPage -1) * this._limit, this._limit * this.currentPage);

        return new PaginatedEntity(this.currentPage, this.totalPages, this._limit, this.totalItems, items);
    }
}
