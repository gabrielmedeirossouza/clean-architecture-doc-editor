import { IRemoveSmartChipPresenterOutputPort } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { IRemoveSmartChipUseCaseOutputPort, IRemoveSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";
import { PresenterMessageDTO } from "../../dtos";
import { Result } from "@/shared";
import { PresenterGenericServiceErrorDTO } from "../../dtos/presenter-generic-service-error-dto";

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

		if (response.secondaryValue.code === "SMART_CHIP_NOT_FOUND")
		{
			return this._outputPort.removeResponse?.Notify(Result.Secondary(new PresenterMessageDTO({ code: "SMART_CHIP_NOT_FOUND", message: "Não foi possível remover o Smart Chip." })));
		}

		if (response.secondaryValue.code === "GENERIC_SERVICE_ERROR")
		{
			return this._outputPort.removeResponse?.Notify(Result.Secondary(new PresenterGenericServiceErrorDTO()));
		}
	}
}
