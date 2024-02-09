import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";
import { IListSmartChipPresenterOutputPort, ISmartChipViewModel } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { IListSmartChipUseCaseOutputPort, IListSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";

export interface IListSmartChipPresenterConstructorParameters {
    outputPort: IListSmartChipPresenterOutputPort;
}

export class ListSmartChipPresenter implements IListSmartChipUseCaseOutputPort
{
	private readonly _outputPort: IListSmartChipPresenterOutputPort;

	constructor({ outputPort }: IListSmartChipPresenterConstructorParameters)
	{
		this._outputPort = outputPort;
	}

	public ListResponse({ response }: IListSmartChipUseCaseResponseModel): void
	{
		return this._outputPort.listResponse?.Notify(this._MapSmartChipListToViewModelList(response));
	}

	private _MapSmartChipListToViewModelList(smartChipList: IPersistedEntity<ISmartChip>[]): ISmartChipViewModel[]
	{
		return smartChipList.map(smartChip => ({
			id: smartChip.id,
			label: smartChip.entity.label,
			prefix: smartChip.entity.prefix,
			position: smartChip.entity.position
		}));
	}
}
