import { IEditSmartChipPresenterOutputPort } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { Result } from "@/shared";
import { IEditSmartChipUseCaseLabelResponseModel, IEditSmartChipUseCaseOutputPort, IEditSmartChipUseCasePositionResponseModel, IEditSmartChipUseCasePrefixResponseModel, IEditSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";
import { PresenterMessageDTO, PresenterStringTooLongErrorDTO, PresenterStringTooShortErrorDTO, PresenterNumberOutsideRangeErrorDTO } from "../../dtos";

export interface IEditSmartChipPresenterConstructorParameters {
    outputPort: IEditSmartChipPresenterOutputPort;
}

export class EditSmartChipPresenter implements IEditSmartChipUseCaseOutputPort
{
	private readonly _outputPort: IEditSmartChipPresenterOutputPort;

	constructor({ outputPort }: IEditSmartChipPresenterConstructorParameters)
	{
		this._outputPort = outputPort;
	}

	public EditResponse({ response }: IEditSmartChipUseCaseResponseModel): void
	{
		if (response.ok)
		{
			return this._outputPort.editResponse?.Notify(
				Result.Ok({
					id: response.value.id,
					label: response.value.entity.label,
					prefix: response.value.entity.prefix,
					position: response.value.entity.position
				})
			);
		}

		return this._outputPort.editResponse?.Notify(
			Result.Fail(new PresenterMessageDTO({ message: "Não foi possível editar o Smart Chip." }))
		);
	}

	public LabelResponse({ response }: IEditSmartChipUseCaseLabelResponseModel): void
	{
		if (response.ok)
		{
			return this._outputPort.labelResponse?.Notify(Result.Ok(response.value));
		}

		if (response.error.IsStringTooShortDTO())
		{
			const { value, minLength } = response.error;

			return this._outputPort.labelResponse?.Notify(
				Result.Fail(new PresenterStringTooShortErrorDTO({
					fieldName: "Etiqueta",
					value,
					minLength,
					message: `O campo etiqueta deve ter no mínimo ${minLength} caracteres.`
				}))
			);
		}

		if (response.error.IsStringTooLongDTO())
		{
			const { value, maxLength } = response.error;

			return this._outputPort.labelResponse?.Notify(
				Result.Fail(new PresenterStringTooLongErrorDTO({
					fieldName: "Etiqueta",
					value,
					maxLength,
					message: `O campo etiqueta deve ter no máximo ${maxLength} caracteres.`
				}))
			);
		}
	}

	public PrefixResponse({ response }: IEditSmartChipUseCasePrefixResponseModel): void
	{
		if (response.ok)
		{
			return this._outputPort.prefixResponse?.Notify(Result.Ok(response.value));
		}

		if (response.error.IsStringTooShortDTO())
		{
			const { value, minLength } = response.error;

			return this._outputPort.prefixResponse?.Notify(
				Result.Fail(new PresenterStringTooShortErrorDTO({
					fieldName: "Prefixo",
					value,
					minLength,
					message: `O campo prefixo deve ter no mínimo ${minLength} caracteres.`
				}))
			);
		}

		if (response.error.IsStringTooLongDTO())
		{
			const { value, maxLength } = response.error;

			return this._outputPort.prefixResponse?.Notify(
				Result.Fail(new PresenterStringTooLongErrorDTO({
					fieldName: "Prefixo",
					value,
					maxLength,
					message: `O campo prefixo deve ter no máximo ${maxLength} caracteres.`
				}))
			);
		}
	}

	public PositionResponse({ response }: IEditSmartChipUseCasePositionResponseModel): void
	{
		if (response.ok)
		{
			return this._outputPort.positionResponse?.Notify(Result.Ok(response.value));
		}

		if (response.error.IsNumberOutsideRangeDTO())
		{
			const { value, minValue, maxValue } = response.error;

			return this._outputPort.positionResponse?.Notify(
				Result.Fail(new PresenterNumberOutsideRangeErrorDTO({
					fieldName: "Posição",
					value,
					minValue,
					maxValue,
					message: `O campo posição deve estar entre ${minValue} e ${maxValue}.`
				}))
			);
		}
	}
}
