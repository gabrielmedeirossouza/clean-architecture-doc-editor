import { PersistedEntity, SmartChip } from "@/entities/interfaces";
import { ListSmartChipUseCase } from "@/use-cases/protocols/smart-chip";
import { ListSmartChipPresenter, SmartChipViewModel } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";

export namespace ConcreteListSmartChipPresenter {

    export interface ConstructorParameters {
        outputPort: ListSmartChipPresenter.OutputPort;
    }

    export class Presenter implements ListSmartChipUseCase.OutputPort {
    	private readonly _outputPort: ListSmartChipPresenter.OutputPort;

    	constructor({ outputPort }: ConstructorParameters) {
    		this._outputPort = outputPort;
    	}

    	public ListResponse({ response }: ListSmartChipUseCase.ListResponseModel): void {
    		return this._outputPort.listResponse?.Notify(this._MapSmartChipListToViewModelList(response));
    	}

    	private _MapSmartChipListToViewModelList(smartChipList: PersistedEntity<SmartChip>[]): SmartChipViewModel[] {
    		return smartChipList.map(smartChip => ({
    			id: smartChip.id,
    			label: smartChip.entity.label,
    			prefix: smartChip.entity.prefix,
    		}));
    	}
    }
}
