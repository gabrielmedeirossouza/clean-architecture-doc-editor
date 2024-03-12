import { PersistedDto } from "@/features/@dtos";
import { PaginatedEntity } from "@/features/pagination/entities";
import { IPageResponseResult, IPaginateUseCaseOutputPort, IPaginateView } from "@/features/pagination/protocols";
import { SmartChipEntity } from "@/features/smart-chip/entities";
import { ISmartChipViewModel } from "@/features/smart-chip/protocols";

export class ListSmartChipPresenter implements IPaginateUseCaseOutputPort<SmartChipEntity> {
    constructor(
        private readonly view: IPaginateView<ISmartChipViewModel>
    ) {}

    public PageResponse({ ok, value }: IPageResponseResult<SmartChipEntity>): void {
        if (ok)
            return this.view.RenderSuccess(this.MapToViewModelList(value));

        if (value.code === "ALREADY_FIRST_PAGE" || value.code === "NO_PREVIOUS_PAGE")
            return this.view.RenderMessage("Você já está na primeira página.");

        if (value.code === "ALREADY_LAST_PAGE" || value.code === "NO_NEXT_PAGE")
            return this.view.RenderMessage("Você já está na última página.");

        if (value.code === "PAGE_OUTSIDE_RANGE")
            return this.view.RenderMessage(`A página informada deve ser maior que ${value.minValue - 1} e menor que ${value.maxValue + 1}.`);

        value satisfies never;
    }

    private MapToViewModelList(paginated: PaginatedEntity<PersistedDto<SmartChipEntity>>): PaginatedEntity<ISmartChipViewModel> {
        return {
            ...paginated,
            items: paginated.items.map(smartChip => ({
                id: smartChip.id,
                label: smartChip.entity.label,
                prefix: smartChip.entity.prefix
            }))
        };
    }
}
