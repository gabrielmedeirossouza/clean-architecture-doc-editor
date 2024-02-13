import { ICreateSmartChipPresenterOutputPort } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { Result } from "@/shared";
import {  ICreateSmartChipUseCaseOutputPort, ICreateSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";
import { PresenterStringTooLongErrorDTO, PresenterStringTooShortErrorDTO } from "../../dtos";
import { PresenterNumberOutsideRangeErrorDTO } from "../../dtos/presenter-number-outside-range-error-dto";
import { PresenterGenericServiceErrorDTO } from "../../dtos/presenter-generic-service-error-dto";

export class CreateSmartChipPresenter implements ICreateSmartChipUseCaseOutputPort
{
	constructor(
        private readonly _outputPort: ICreateSmartChipPresenterOutputPort
	)
	{ }

	public CreateResponse({ response }: ICreateSmartChipUseCaseResponseModel): void
	{
		if (response.isPrimary)
		{
			return this._outputPort.createResponse?.Notify(Result.Primary({
				id: response.primaryValue.id,
				label: response.primaryValue.entity.label,
				prefix: response.primaryValue.entity.prefix,
				position: response.primaryValue.entity.position
			}));
		}

		if (response.secondaryValue.code === "LABEL_TOO_SHORT")
		{
			return this._outputPort.createResponse?.Notify(
				Result.Secondary(new PresenterStringTooShortErrorDTO({
					code: "LABEL_TOO_SHORT",
					fieldName: "Etiqueta",
					message: `O Campo Etiqueta deve ter pelo menos ${response.secondaryValue.minLength} caracteres.`,
					value: response.secondaryValue.value,
					minLength: response.secondaryValue.minLength
				}))
			);
		}

		if (response.secondaryValue.code === "LABEL_TOO_LONG")
		{
			return this._outputPort.createResponse?.Notify(
				Result.Secondary(new PresenterStringTooLongErrorDTO({
					code: "LABEL_TOO_LONG",
					fieldName: "Etiqueta",
					message: `O Campo Etiqueta deve ter no máximo ${response.secondaryValue.maxLength} caracteres.`,
					value: response.secondaryValue.value,
					maxLength: response.secondaryValue.maxLength
				}))
			);
		}

		if (response.secondaryValue.code === "PREFIX_TOO_SHORT")
		{
			return this._outputPort.createResponse?.Notify(
				Result.Secondary(new PresenterStringTooShortErrorDTO({
					code: "PREFIX_TOO_SHORT",
					fieldName: "Prefixo",
					message: `O Campo Prefixo deve ter pelo menos ${response.secondaryValue.minLength} caracteres.`,
					value: response.secondaryValue.value,
					minLength: response.secondaryValue.minLength
				}))
			);
		}

		if (response.secondaryValue.code === "PREFIX_TOO_LONG")
		{
			return this._outputPort.createResponse?.Notify(
				Result.Secondary(new PresenterStringTooLongErrorDTO({
					code: "PREFIX_TOO_LONG",
					fieldName: "Prefixo",
					message: `O Campo Prefixo deve ter no máximo ${response.secondaryValue.maxLength} caracteres.`,
					value: response.secondaryValue.value,
					maxLength: response.secondaryValue.maxLength
				}))
			);
		}

		if (response.secondaryValue.code === "POSITION_OUTSIDE_RANGE")
		{
			return this._outputPort.createResponse?.Notify(
				Result.Secondary(new PresenterNumberOutsideRangeErrorDTO({
					code: "POSITION_OUTSIDE_RANGE",
					fieldName: "Posição",
					message: `O Campo Posição deve ser entre ${response.secondaryValue.minValue} e ${response.secondaryValue.maxValue}.`,
					value: response.secondaryValue.value,
					minValue: response.secondaryValue.minValue,
					maxValue: response.secondaryValue.maxValue
				}))
			);
		}

		if (response.secondaryValue.code === "GENERIC_SERVICE_ERROR")
		{
			return this._outputPort.createResponse?.Notify(
				Result.Secondary(new PresenterGenericServiceErrorDTO())
			);
		}
	}
}
