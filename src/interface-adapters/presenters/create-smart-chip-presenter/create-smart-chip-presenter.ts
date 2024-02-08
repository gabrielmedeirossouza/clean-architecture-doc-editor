import { Result } from "../../../shared/result";
import { ICreateSmartChipPresenterOutputPort } from "../../interfaces/presenters/create-smart-chip-presenter";
import { ICreateSmartChipUseCaseLabelResponseModel, ICreateSmartChipUseCasePrefixResponseModel, ICreateSmartChipUseCaseResponseModel, ICreateSmartChipUseCasePositionResponseModel, ICreateSmartChipUseCaseOutputPort } from "../../../use-cases/interfaces/smart-chip/create-smart-chip-use-case";
import { PresentMessageDTO, PresentStringTooLongErrorDTO, PresentStringTooShortErrorDTO } from "../dtos";
import { PresentNumberOutsideRangeErrorDTO } from "../dtos/present-number-outside-range-error-dto";

export class CreateSmartChipPresenter implements ICreateSmartChipUseCaseOutputPort
{
	constructor(
        private readonly _outputPort: ICreateSmartChipPresenterOutputPort
	)
	{ }

	public Response({ response }: ICreateSmartChipUseCaseResponseModel): void
	{
		if (response.ok)
		{
			return this._outputPort.response?.Notify(Result.Ok({
				id: response.value.id,
				label: response.value.entity.label,
				prefix: response.value.entity.prefix,
				position: response.value.entity.position
			}));
		}

		this._outputPort.response?.Notify(
			Result.Fail(new PresentMessageDTO("Smart Chip não pode ser criado."))
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
			const { field, value, minLength } = response.error;
			this._outputPort.labelResponse?.Notify(
				Result.Fail(new PresentStringTooShortErrorDTO(field, `O Campo etiqueta deve ter pelo menos ${minLength} caracteres.`, value, minLength))
			);
		}

		if (response.error.IsStringTooLongDTO())
		{
			const { field, value, maxLength } = response.error;
			this._outputPort.labelResponse?.Notify(
				Result.Fail(new PresentStringTooLongErrorDTO(field, `O Campo etiqueta deve ter no máximo ${maxLength} caracteres.`, value, maxLength))
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
			const { field, value, minLength } = response.error;
			this._outputPort.prefixResponse?.Notify(
				Result.Fail(new PresentStringTooShortErrorDTO(field, `O Campo prefixo deve ter pelo menos ${minLength} caracteres.`, value, minLength))
			);
		}

		if (response.error.IsStringTooLongDTO())
		{
			const { field, value, maxLength } = response.error;
			this._outputPort.prefixResponse?.Notify(
				Result.Fail(new PresentStringTooLongErrorDTO(field, `O Campo prefixo deve ter no máximo ${maxLength} caracteres.`, value, maxLength))
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
			const { field, value, minValue, maxValue } = response.error;
			this._outputPort.positionResponse?.Notify(
				Result.Fail(new PresentNumberOutsideRangeErrorDTO(field, `O Campo posição deve ser entre ${minValue} e ${maxValue}.`, value, minValue, maxValue))
			);
		}
	}
}
