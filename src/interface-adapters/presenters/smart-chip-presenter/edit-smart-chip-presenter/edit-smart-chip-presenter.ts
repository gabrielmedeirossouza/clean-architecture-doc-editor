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
		if (response.isPrimary)
		{
			return this._outputPort.editResponse?.Notify(
				Result.Primary({
					id: response.primaryValue.id,
					label: response.primaryValue.entity.label,
					prefix: response.primaryValue.entity.prefix,
					position: response.primaryValue.entity.position
				})
			);
		}

		return this._outputPort.editResponse?.Notify(
			Result.Secondary(new PresenterMessageDTO({ message: "Não foi possível editar o Smart Chip." }))
		);
	}

	public LabelResponse({ response }: IEditSmartChipUseCaseLabelResponseModel): void
	{
		if (response.isPrimary)
		{
			return this._outputPort.labelResponse?.Notify(Result.Primary(response.primaryValue));
		}

		if (response.secondaryValue.IsStringTooShortDTO())
		{
			const { value, minLength } = response.secondaryValue;

			return this._outputPort.labelResponse?.Notify(
				Result.Secondary(new PresenterStringTooShortErrorDTO({
					fieldName: "Etiqueta",
					value,
					minLength,
					message: `O campo etiqueta deve ter no mínimo ${minLength} caracteres.`
				}))
			);
		}

		if (response.secondaryValue.IsStringTooLongDTO())
		{
			const { value, maxLength } = response.secondaryValue;

			return this._outputPort.labelResponse?.Notify(
				Result.Secondary(new PresenterStringTooLongErrorDTO({
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
		if (response.isPrimary)
		{
			return this._outputPort.prefixResponse?.Notify(Result.Primary(response.primaryValue));
		}

		if (response.secondaryValue.IsStringTooShortDTO())
		{
			const { value, minLength } = response.secondaryValue;

			return this._outputPort.prefixResponse?.Notify(
				Result.Secondary(new PresenterStringTooShortErrorDTO({
					fieldName: "Prefixo",
					value,
					minLength,
					message: `O campo prefixo deve ter no mínimo ${minLength} caracteres.`
				}))
			);
		}

		if (response.secondaryValue.IsStringTooLongDTO())
		{
			const { value, maxLength } = response.secondaryValue;

			return this._outputPort.prefixResponse?.Notify(
				Result.Secondary(new PresenterStringTooLongErrorDTO({
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
		if (response.isPrimary)
		{
			return this._outputPort.positionResponse?.Notify(Result.Primary(response.primaryValue));
		}

		if (response.secondaryValue.IsNumberOutsideRangeDTO())
		{
			const { value, minValue, maxValue } = response.secondaryValue;

			return this._outputPort.positionResponse?.Notify(
				Result.Secondary(new PresenterNumberOutsideRangeErrorDTO({
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
