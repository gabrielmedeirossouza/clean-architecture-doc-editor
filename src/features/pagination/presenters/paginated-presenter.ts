import { IPageResponseResult, IPaginateUseCaseOutputPort, IPaginatedView } from "@/features/pagination/protocols";

export class PaginatedPresenter<T> implements IPaginateUseCaseOutputPort<any> {
    constructor(
        private readonly view: IPaginatedView<T>
    ) {}

    public PageResponse({ ok, value }: IPageResponseResult<any>): void {
        if (ok)
            return this.view.RenderSuccess?.({ ...value });

        if (value.code === "ALREADY_FIRST_PAGE")
            return this.view.RenderMessage?.("Você já está na primeira página.");

        if (value.code === "ALREADY_LAST_PAGE")
            return this.view.RenderMessage?.("Você já está na última página.");

        if (value.code === "PAGE_OUTSIDE_RANGE")
            return this.view.RenderFieldError?.("page", `A página informada deve ser maior que ${value.minValue - 1} e menor que ${value.maxValue + 1}.`);

        value satisfies never;
    }
}
