import { ICreateSmartChipPresenterOutputPort } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { Result } from "@/shared";
import { ICreateSmartChipUseCaseLabelResponseModel, ICreateSmartChipUseCaseOutputPort, ICreateSmartChipUseCasePositionResponseModel, ICreateSmartChipUseCasePrefixResponseModel, ICreateSmartChipUseCaseResponseModel } from "@/use-cases/interfaces/smart-chip";
import { PresenterMessageDTO, PresenterStringTooLongErrorDTO, PresenterStringTooShortErrorDTO } from "../../dtos";
import { PresenterNumberOutsideRangeErrorDTO } from "../../dtos/presenter-number-outside-range-error-dto";

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

		this._outputPort.createResponse?.Notify(
			Result.Secondary(new PresenterMessageDTO({ message: "Smart Chip não pode ser criado." }))
		);
	}

	public LabelResponse({ response }: ICreateSmartChipUseCaseLabelResponseModel): void
	{
		if (response.isPrimary)
		{
			return this._outputPort.labelResponse?.Notify(Result.Primary(response.primaryValue));
		}

		if (response.secondaryValue.IsStringTooShortDTO())
		{
			const { value, minLength } = response.secondaryValue;
			this._outputPort.labelResponse?.Notify(
				Result.Secondary(new PresenterStringTooShortErrorDTO({ fieldName: "Etiqueta", message: `O Campo etiqueta deve ter pelo menos ${minLength} caracteres.`, value, minLength }))
			);
		}

		if (response.secondaryValue.IsStringTooLongDTO())
		{
			const { value, maxLength } = response.secondaryValue;
			this._outputPort.labelResponse?.Notify(
				Result.Secondary(new PresenterStringTooLongErrorDTO({ fieldName: "Etiqueta", message: `O Campo etiqueta deve ter no máximo ${maxLength} caracteres.`, value, maxLength }))
			);
		}
	}

	public PrefixResponse({ response }: ICreateSmartChipUseCasePrefixResponseModel): void
	{
		if (response.isPrimary)
		{
			return this._outputPort.prefixResponse?.Notify(Result.Primary(response.primaryValue));
		}

		if (response.secondaryValue.IsStringTooShortDTO())
		{
			const { value, minLength } = response.secondaryValue;
			this._outputPort.prefixResponse?.Notify(
				Result.Secondary(new PresenterStringTooShortErrorDTO({ fieldName: "Prefixo", message: `O Campo prefixo deve ter pelo menos ${minLength} caracteres.`, value, minLength }))
			);
		}

		if (response.secondaryValue.IsStringTooLongDTO())
		{
			const { value, maxLength } = response.secondaryValue;
			this._outputPort.prefixResponse?.Notify(
				Result.Secondary(new PresenterStringTooLongErrorDTO({ fieldName: "Prefixo", message: `O Campo prefixo deve ter no máximo ${maxLength} caracteres.`, value, maxLength }))
			);
		}
	}

	public PositionResponse({ response }: ICreateSmartChipUseCasePositionResponseModel): void
	{
		if (response.isPrimary)
		{
			return this._outputPort.positionResponse?.Notify(Result.Primary(response.primaryValue));
		}

		if (response.secondaryValue.IsNumberOutsideRangeDTO())
		{
			const { value, minValue, maxValue } = response.secondaryValue;
			this._outputPort.positionResponse?.Notify(
				Result.Secondary(new PresenterNumberOutsideRangeErrorDTO({ fieldName: "Posição", message: `O Campo posição deve ser entre ${minValue} e ${maxValue}.`, value, minValue, maxValue }))
			);
		}
	}
}
