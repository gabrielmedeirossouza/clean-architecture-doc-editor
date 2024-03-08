import { IPaginatedEntity, IPersistedEntity } from "@/features/entities/protocols";
import { IListSmartChipUseCaseOutputPort, IListSmartChipView, ISmartChipEntity, ISmartChipViewModel } from "@/features/smart-chip/protocols";

export class ListSmartChipPresenter implements IListSmartChipUseCaseOutputPort {
    constructor(private readonly view: IListSmartChipView) { }

    public ListResponse(result: IPaginatedEntity<IPersistedEntity<ISmartChipEntity>>): void {
        return this.view.RenderSuccess(this.MapSmartChipListToViewModelList(result));
    }

    private MapSmartChipListToViewModelList(paginated: IPaginatedEntity<IPersistedEntity<ISmartChipEntity>>): IPaginatedEntity<ISmartChipViewModel> {
        return {
            ...paginated,
            items: paginated.items.map(smartChip => ({
                id: smartChip.id,
                label: smartChip.entity.label,
                prefix: smartChip.entity.prefix,
            }))
        };
    }
}
