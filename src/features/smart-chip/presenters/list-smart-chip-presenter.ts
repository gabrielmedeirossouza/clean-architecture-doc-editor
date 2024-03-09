import { PaginatedEntity, PersistedEntity } from "@/features/entities";
import { IListSmartChipUseCaseOutputPort, IListSmartChipView, ISmartChipViewModel } from "@/features/smart-chip/protocols";
import { SmartChipEntity } from "@/features/smart-chip/entities";

export class ListSmartChipPresenter implements IListSmartChipUseCaseOutputPort {
    constructor(private readonly view: IListSmartChipView) { }

    public ListResponse(result: PaginatedEntity<PersistedEntity<SmartChipEntity>>): void {
        return this.view.RenderSuccess({
            currentPage: result.currentPage,
            totalPages: result.totalPages,
            limit: result.limit,
            totalItems: result.totalItems,
            items: this.MapSmartChipListToViewModelList(result.items),
        });
    }

    private MapSmartChipListToViewModelList(persistedSmartChip: PersistedEntity<SmartChipEntity>[]): ISmartChipViewModel[] {
        return persistedSmartChip.map(smartChip => ({
            id: smartChip.id,
            label: smartChip.entity.label,
            prefix: smartChip.entity.prefix,
        }));
    }
}
