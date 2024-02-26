import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChip } from "@/entities/protocols/smart-chip";
import { IListSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/list-smart-chip-use-case";
import { IListSmartChipPresenterOutput } from "@/interface-adapters/protocols/presenters/smart-chip-presenter/list-smart-chip-presenter";
import { ISmartChipViewModel } from "@/interface-adapters/protocols/views/smart-chip-view/view-model";

export class ListSmartChipPresenter implements IListSmartChipUseCaseOutputPort {
	constructor(private readonly _outputPort: IListSmartChipPresenterOutput) { }

	public ListResponse(result: IPersistedEntity<ISmartChip>[]): void {
		return this._outputPort.listOutput(this._MapSmartChipListToViewModelList(result));
	}

	private _MapSmartChipListToViewModelList(smartChipList: IPersistedEntity<ISmartChip>[]): ISmartChipViewModel[] {
		return smartChipList.map(smartChip => ({
			id: smartChip.id,
			label: smartChip.entity.label,
			prefix: smartChip.entity.prefix,
		}));
	}
}
