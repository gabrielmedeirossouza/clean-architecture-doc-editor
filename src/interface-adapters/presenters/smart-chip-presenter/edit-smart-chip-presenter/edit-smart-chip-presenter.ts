import { IEditSmartChipPresenterOutputPort } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { Result } from "@/shared";
import { IEditSmartChipUseCaseOutputPort, IEditSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";
import {  PresenterStringTooLongErrorDTO, PresenterStringTooShortErrorDTO, PresenterNumberOutsideRangeErrorDTO } from "../../dtos";
import { PresenterGenericServiceErrorDTO } from "../../dtos/presenter-generic-service-error-dto";

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

		if (response.secondaryValue.code === "LABEL_TOO_SHORT")
		{
			return this._outputPort.editResponse?.Notify(
				Result.Secondary(new PresenterStringTooShortErrorDTO({
					code: "LABEL_TOO_SHORT",
					fieldName: "Etiqueta",
					message: `O campo Etiqueta deve ter no mínimo ${response.secondaryValue.minLength} caracteres.`,
					value: response.secondaryValue.value,
					minLength: response.secondaryValue.minLength
				}))
			);
		}

		if (response.secondaryValue.code === "LABEL_TOO_LONG")
		{
			return this._outputPort.editResponse?.Notify(
				Result.Secondary(new PresenterStringTooLongErrorDTO({
					code: "LABEL_TOO_LONG",
					fieldName: "Etiqueta",
					message: `O campo Etiqueta deve ter no máximo ${response.secondaryValue.maxLength} caracteres.`,
					value: response.secondaryValue.value,
					maxLength: response.secondaryValue.maxLength
				}))
			);
		}

		if (response.secondaryValue.code === "PREFIX_TOO_SHORT")
		{
			return this._outputPort.editResponse?.Notify(
				Result.Secondary(new PresenterStringTooShortErrorDTO({
					code: "PREFIX_TOO_SHORT",
					fieldName: "Prefixo",
					message: `O campo Prefixo deve ter no mínimo ${response.secondaryValue.minLength} caracteres.`,
					value: response.secondaryValue.value,
					minLength: response.secondaryValue.minLength
				}))
			);
		}

		if (response.secondaryValue.code === "PREFIX_TOO_LONG")
		{
			return this._outputPort.editResponse?.Notify(
				Result.Secondary(new PresenterStringTooLongErrorDTO({
					code: "PREFIX_TOO_LONG",
					fieldName: "Prefixo",
					message: `O campo Prefixo deve ter no máximo ${response.secondaryValue.maxLength} caracteres.`,
					value: response.secondaryValue.value,
					maxLength: response.secondaryValue.maxLength
				}))
			);
		}

		if (response.secondaryValue.code === "POSITION_OUTSIDE_RANGE")
		{
			return this._outputPort.editResponse?.Notify(
				Result.Secondary(new PresenterNumberOutsideRangeErrorDTO({
					code: "POSITION_OUTSIDE_RANGE",
					fieldName: "Posição",
					message: `O campo Posição deve estar entre ${response.secondaryValue.minValue} e ${response.secondaryValue.maxValue}.`,
					value: response.secondaryValue.value,
					minValue: response.secondaryValue.minValue,
					maxValue: response.secondaryValue.maxValue
				}))
			);
		}

		if (response.secondaryValue.code === "SMART_CHIP_NOT_FOUND")
		{
			return this._outputPort.editResponse?.Notify(
				Result.Secondary(new PresenterGenericServiceErrorDTO())
			);
		}
	}
}
