import { Result, MessageDto, NumberOutsideRangeErrorDto } from "@/shared";
export class PaginatedEntity<T> {
    constructor(
        private _currentPage: number,
        private _totalPages: number,
        private _limit: number,
        private _totalItems: number,
        private _items: T[]
    ) { }

    public get currentPage(): number {
        return this._currentPage;
    }

    public get totalPages(): number {
        return this._totalPages;
    }

    public get limit(): number {
        return this._limit;
    }

    public get totalItems(): number {
        return this._totalItems;
    }

    public get items(): T[] {
        return this._items;
    }

    public FirstPage(): Result<void, MessageDto<"ALREADY_FIRST_PAGE">> {
        if (this.currentPage === 1) return Result.Fail(new MessageDto("ALREADY_FIRST_PAGE", "Already on the first page."));

        this._currentPage = 1;

        return Result.Ok(undefined);
    }

    public LastPage(): Result<void, MessageDto<"ALREADY_LAST_PAGE">> {
        if (this.currentPage === this.totalPages) return Result.Fail(new MessageDto("ALREADY_LAST_PAGE", "Already on the last page."));

        this._currentPage = this.totalPages;

        return Result.Ok(undefined);
    }

    public PreviousPage(): Result<void, MessageDto<"NO_PREVIOUS_PAGE">> {
        if (this.currentPage === 1) return Result.Fail(new MessageDto("NO_PREVIOUS_PAGE", "No previous page."));

        this._currentPage--;

        return Result.Ok(undefined);
    }

    public NextPage(): Result<void, MessageDto<"NO_NEXT_PAGE">> {
        if (this.currentPage === this.totalPages) return Result.Fail(new MessageDto("NO_NEXT_PAGE", "No next page."));

        this._currentPage++;

        return Result.Ok(undefined);
    }

    public GoToPage(page: number): Result<void, NumberOutsideRangeErrorDto<"PAGE_OUTSIDE_RANGE">> {
        if (page < 1 || page > this.totalPages) return Result.Fail(new NumberOutsideRangeErrorDto("PAGE_OUTSIDE_RANGE", "page", page, 1, this.totalPages));

        this._currentPage = page;

        return Result.Ok(undefined);
    }

    public SetLimit(limit: number): Result<void, NumberOutsideRangeErrorDto<"LIMIT_OUTSIDE_RANGE">> {
        if (limit < 1) return Result.Fail(new NumberOutsideRangeErrorDto("LIMIT_OUTSIDE_RANGE", "limit", limit, 1, Number.MAX_SAFE_INTEGER));

        this._limit = limit;

        return Result.Ok(undefined);
    }
}
