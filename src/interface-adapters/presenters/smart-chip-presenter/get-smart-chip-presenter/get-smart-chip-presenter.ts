import { IGetSmartChipPresenterOutputPort } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { Result } from "@/shared";
import { IGetSmartChipUseCaseOutputPort, IGetSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";
import { PresenterMessageDTO } from "../../dtos";

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
		if (response.ok)
		{
			return this._outputPort.getSmartChipByIdResponse?.Notify(Result.Ok({
				id: response.value.id,
				label: response.value.entity.label,
				prefix: response.value.entity.prefix,
				position: response.value.entity.position
			}));
		}

		return this._outputPort.getSmartChipByIdResponse?.Notify(Result.Fail(new PresenterMessageDTO({ message: "Não foi possível obter o Smart Chip." })));
	}
}
