import { IGetSmartChipPresenterOutputPort } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { Result } from "@/shared";
import { IGetSmartChipUseCaseOutputPort, IGetSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";
import { PresenterMessageDTO } from "../../dtos";
import { PresenterGenericServiceErrorDTO } from "../../dtos/presenter-generic-service-error-dto";

export interface IGetSmartChipPresenterConstructorParameters {
    outputPort: IGetSmartChipPresenterOutputPort;
}

export class GetSmartChipPresenter implements IGetSmartChipUseCaseOutputPort
{
	private readonly _outputPort: IGetSmartChipPresenterOutputPort;

	constructor({ outputPort }: IGetSmartChipPresenterConstructorParameters)
	{
		this._outputPort = outputPort;
	}

	public GetSmartChipByIdResponse({ response }: IGetSmartChipUseCaseResponseModel): void
	{
		if (response.isPrimary)
		{
			return this._outputPort.getSmartChipByIdResponse?.Notify(Result.Primary({
				id: response.primaryValue.id,
				label: response.primaryValue.entity.label,
				prefix: response.primaryValue.entity.prefix,
				position: response.primaryValue.entity.position
			}));
		}

		if (response.secondaryValue.code === "SMART_CHIP_NOT_FOUND")
		{
			return this._outputPort.getSmartChipByIdResponse?.Notify(Result.Secondary(new PresenterMessageDTO({ code: "SMART_CHIP_NOT_FOUND", message: "Não foi possível obter o Smart Chip." })));
		}

		if (response.secondaryValue.code === "GENERIC_SERVICE_ERROR")
		{
			return this._outputPort.getSmartChipByIdResponse?.Notify(Result.Secondary(new PresenterGenericServiceErrorDTO()));
		}
	}
}
