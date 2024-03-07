import { IPersistedEntity } from "@/features/entities/protocols";
import { IListSmartChipUseCaseOutputPort, IListSmartChipView, ISmartChipEntity, ISmartChipViewModel } from "@/features/smart-chip/protocols";

export class ListSmartChipPresenter implements IListSmartChipUseCaseOutputPort {
    constructor(private readonly view: IListSmartChipView) { }

    public ListResponse(result: IPersistedEntity<ISmartChipEntity>[]): void {
        return this.view.RenderSuccess(this._MapSmartChipListToViewModelList(result));
    }

    private _MapSmartChipListToViewModelList(smartChipList: IPersistedEntity<ISmartChipEntity>[]): ISmartChipViewModel[] {
        return smartChipList.map(smartChip => ({
            id: smartChip.id,
            label: smartChip.entity.label,
            prefix: smartChip.entity.prefix,
        }));
    }
}
