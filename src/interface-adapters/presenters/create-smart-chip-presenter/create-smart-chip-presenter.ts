import { Result } from "../../../shared/result";
import { ICreateSmartChipPresenterOutputPort } from "../../interfaces/presenters/create-smart-chip-presenter";
import { ICreateSmartChipUseCaseNameResponseModel, ICreateSmartChipUseCaseLabelResponseModel, ICreateSmartChipUseCasePrefixResponseModel, ICreateSmartChipUseCaseResponseModel, ICreateSmartChipUseCasePositionResponseModel, ICreateSmartChipUseCaseOutputPort } from "../../../use-cases/interfaces/smart-chip/create-smart-chip-use-case";
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
		if (response.ok) return this._outputPort.response?.Notify(Result.Ok(response.value));

		this._outputPort.response?.Notify(
			Result.Fail(new PresentMessageDTO("Smart Chip não pode ser criado."))
		);
	}

	public NameResponse({ response }: ICreateSmartChipUseCaseNameResponseModel): void
	{
		if (response.ok) return this._outputPort.idResponse?.Notify(Result.Ok(response.value));

		if (response.error.IsStringTooShortDTO())
		{
			const { field, value, minLength } = response.error;
			this._outputPort.idResponse?.Notify(
				Result.Fail(new PresentStringTooShortErrorDTO(field, `O Campo nome deve ter pelo menos ${minLength} caracteres.`, value, minLength))
			);
		}

		if (response.error.IsStringTooLongDTO())
		{
			const { field, value, maxLength } = response.error;
			this._outputPort.idResponse?.Notify(
				Result.Fail(new PresentStringTooLongErrorDTO(field, `O Campo nome deve ter no máximo ${maxLength} caracteres.`, value, maxLength))
			);
		}
	}

	public LabelResponse({ response }: ICreateSmartChipUseCaseLabelResponseModel): void
	{
		if (response.ok) return this._outputPort.nameResponse?.Notify(Result.Ok(response.value));

		if (response.error.IsStringTooShortDTO())
		{
			const { field, value, minLength } = response.error;
			this._outputPort.nameResponse?.Notify(
				Result.Fail(new PresentStringTooShortErrorDTO(field, `O Campo etiqueta deve ter pelo menos ${minLength} caracteres.`, value, minLength))
			);
		}

		if (response.error.IsStringTooLongDTO())
		{
			const { field, value, maxLength } = response.error;
			this._outputPort.nameResponse?.Notify(
				Result.Fail(new PresentStringTooLongErrorDTO(field, `O Campo etiqueta deve ter no máximo ${maxLength} caracteres.`, value, maxLength))
			);
		}
	}

	public PrefixResponse({ response }: ICreateSmartChipUseCasePrefixResponseModel): void
	{
		if (response.ok) return this._outputPort.prefixResponse?.Notify(Result.Ok(response.value));

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
		if (response.ok) return this._outputPort.valueResponse?.Notify(Result.Ok(response.value));

		if (response.error.IsNumberOutsideRangeDTO())
		{
			const { field, value, minValue, maxValue } = response.error;
			this._outputPort.valueResponse?.Notify(
				Result.Fail(new PresentNumberOutsideRangeErrorDTO(field, `O Campo posição deve ser entre ${minValue} e ${maxValue}.`, value, minValue, maxValue))
			);
		}
	}
}
