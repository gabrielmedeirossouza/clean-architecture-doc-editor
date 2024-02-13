import { IRemoveSmartChipPresenterOutputPort } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { IRemoveSmartChipUseCaseOutputPort, IRemoveSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";
import { PresenterMessageDTO } from "../../dtos";
import { Result } from "@/shared";

export interface IRemoveSmartChipPresenterConstructorParameters {
    outputPort: IRemoveSmartChipPresenterOutputPort;
}

export class RemoveSmartChipPresenter implements IRemoveSmartChipUseCaseOutputPort
{
	private readonly _outputPort: IRemoveSmartChipPresenterOutputPort;

	constructor({ outputPort }: IRemoveSmartChipPresenterConstructorParameters)
	{
		this._outputPort = outputPort;
	}

	public RemoveResponse({ response }: IRemoveSmartChipUseCaseResponseModel): void
	{
		if (response.isPrimary)
		{
			return this._outputPort.removeResponse?.Notify(response);
		}

		return this._outputPort.removeResponse?.Notify(Result.Secondary(new PresenterMessageDTO({ message: "Não foi possível excluir o Smart Chip." })));
	}
}
