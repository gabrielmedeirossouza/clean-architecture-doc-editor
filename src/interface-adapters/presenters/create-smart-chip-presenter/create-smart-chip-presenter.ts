import { Result } from "../../../shared/result";
import { ICreateSmartChipPresenterOutputPort } from "../../interfaces/presenters/create-smart-chip-presenter";
import { ICreateSmartChipUseCaseNameResponseModel, ICreateSmartChipUseCaseLabelResponseModel, ICreateSmartChipUseCasePrefixResponseModel, ICreateSmartChipUseCaseResponseModel, ICreateSmartChipUseCasePositionResponseModel, ICreateSmartChipUseCaseOutputPort } from "../../../use-cases/interfaces/smart-chip/create-smart-chip-use-case";
import { PresentMessageDTO, PresentStringTooLongErrorDTO, PresentStringTooShortErrorDTO } from "../dtos";
import { PresentNumberOutsideRangeErrorDTO } from "../dtos/present-number-outside-range-error-dto";

export class CreateSmartChipPresenter implements ICreateSmartChipUseCaseOutputPort {
	constructor(
		private readonly _outputPort: ICreateSmartChipPresenterOutputPort
	) { }

	public response({ response }: ICreateSmartChipUseCaseResponseModel): void {
		if (response.ok) return this._outputPort.response?.notify(Result.ok(response.okValue));

		this._outputPort.response?.notify(
			Result.fail(new PresentMessageDTO("Smart Chip não pode ser criado."))
		);
	}

	public nameResponse({ response }: ICreateSmartChipUseCaseNameResponseModel): void {
		if (response.ok) return this._outputPort.idResponse?.notify(Result.ok(response.okValue));

		if (response.failValue.isStringTooShortDTO()) {
			const { field, value, minLength } = response.failValue;
			this._outputPort.idResponse?.notify(
				Result.fail(new PresentStringTooShortErrorDTO(field, `O Campo nome deve ter pelo menos ${minLength} caracteres.`, value, minLength))
			);
		}
		
		if (response.failValue.isStringTooLongDTO()) {
			const { field, value, maxLength } = response.failValue;
			this._outputPort.idResponse?.notify(
				Result.fail(new PresentStringTooLongErrorDTO(field, `O Campo nome deve ter no máximo ${maxLength} caracteres.`, value, maxLength))
			);
		}
	}

	public labelResponse({ response }: ICreateSmartChipUseCaseLabelResponseModel): void {
		if (response.ok) return this._outputPort.nameResponse?.notify(Result.ok(response.okValue));

		if (response.failValue.isStringTooShortDTO()) {
			const { field, value, minLength } = response.failValue;
			this._outputPort.nameResponse?.notify(
				Result.fail(new PresentStringTooShortErrorDTO(field, `O Campo etiqueta deve ter pelo menos ${minLength} caracteres.`, value, minLength))
			);
		}
		
		if (response.failValue.isStringTooLongDTO()) {
			const { field, value, maxLength } = response.failValue;
			this._outputPort.nameResponse?.notify(
				Result.fail(new PresentStringTooLongErrorDTO(field, `O Campo etiqueta deve ter no máximo ${maxLength} caracteres.`, value, maxLength))
			);
		}
	}

	public prefixResponse({ response }: ICreateSmartChipUseCasePrefixResponseModel): void {
		if (response.ok) return this._outputPort.prefixResponse?.notify(Result.ok(response.okValue));

		if (response.failValue.isStringTooShortDTO()) {
			const { field, value, minLength } = response.failValue;
			this._outputPort.prefixResponse?.notify(
				Result.fail(new PresentStringTooShortErrorDTO(field, `O Campo prefixo deve ter pelo menos ${minLength} caracteres.`, value, minLength))
			);
		}
		
		if (response.failValue.isStringTooLongDTO()) {
			const { field, value, maxLength } = response.failValue;
			this._outputPort.prefixResponse?.notify(
				Result.fail(new PresentStringTooLongErrorDTO(field, `O Campo prefixo deve ter no máximo ${maxLength} caracteres.`, value, maxLength))
			);
		}
	}

	public PositionResponse({ response }: ICreateSmartChipUseCasePositionResponseModel): void {
		if (response.ok) return this._outputPort.valueResponse?.notify(Result.ok(response.okValue));

		if (response.failValue.isNumberOutsideRangeDTO()) {
			const { field, value, minValue, maxValue } = response.failValue;
			this._outputPort.valueResponse?.notify(
				Result.fail(new PresentNumberOutsideRangeErrorDTO(field, `O Campo posição deve ser entre ${minValue} e ${maxValue}.`, value, minValue, maxValue))
			);
		}
	}
}