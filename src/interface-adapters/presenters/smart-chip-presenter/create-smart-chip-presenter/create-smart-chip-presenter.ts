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
		if (response.ok)
		{
			return this._outputPort.createResponse?.Notify(Result.Ok({
				id: response.value.id,
				label: response.value.entity.label,
				prefix: response.value.entity.prefix,
				position: response.value.entity.position
			}));
		}

		this._outputPort.createResponse?.Notify(
			Result.Fail(new PresenterMessageDTO({ message: "Smart Chip não pode ser criado." }))
		);
	}

	public LabelResponse({ response }: ICreateSmartChipUseCaseLabelResponseModel): void
	{
		if (response.ok)
		{
			return this._outputPort.labelResponse?.Notify(Result.Ok(response.value));
		}

		if (response.error.IsStringTooShortDTO())
		{
			const { value, minLength } = response.error;
			this._outputPort.labelResponse?.Notify(
				Result.Fail(new PresenterStringTooShortErrorDTO({ fieldName: "Etiqueta", message: `O Campo etiqueta deve ter pelo menos ${minLength} caracteres.`, value, minLength }))
			);
		}

		if (response.error.IsStringTooLongDTO())
		{
			const { value, maxLength } = response.error;
			this._outputPort.labelResponse?.Notify(
				Result.Fail(new PresenterStringTooLongErrorDTO({ fieldName: "Etiqueta", message: `O Campo etiqueta deve ter no máximo ${maxLength} caracteres.`, value, maxLength }))
			);
		}
	}

	public PrefixResponse({ response }: ICreateSmartChipUseCasePrefixResponseModel): void
	{
		if (response.ok)
		{
			return this._outputPort.prefixResponse?.Notify(Result.Ok(response.value));
		}

		if (response.error.IsStringTooShortDTO())
		{
			const { value, minLength } = response.error;
			this._outputPort.prefixResponse?.Notify(
				Result.Fail(new PresenterStringTooShortErrorDTO({ fieldName: "Prefixo", message: `O Campo prefixo deve ter pelo menos ${minLength} caracteres.`, value, minLength }))
			);
		}

		if (response.error.IsStringTooLongDTO())
		{
			const { value, maxLength } = response.error;
			this._outputPort.prefixResponse?.Notify(
				Result.Fail(new PresenterStringTooLongErrorDTO({ fieldName: "Prefixo", message: `O Campo prefixo deve ter no máximo ${maxLength} caracteres.`, value, maxLength }))
			);
		}
	}

	public PositionResponse({ response }: ICreateSmartChipUseCasePositionResponseModel): void
	{
		if (response.ok)
		{
			return this._outputPort.positionResponse?.Notify(Result.Ok(response.value));
		}

		if (response.error.IsNumberOutsideRangeDTO())
		{
			const { value, minValue, maxValue } = response.error;
			this._outputPort.positionResponse?.Notify(
				Result.Fail(new PresenterNumberOutsideRangeErrorDTO({ fieldName: "Posição", message: `O Campo posição deve ser entre ${minValue} e ${maxValue}.`, value, minValue, maxValue }))
			);
		}
	}
}
