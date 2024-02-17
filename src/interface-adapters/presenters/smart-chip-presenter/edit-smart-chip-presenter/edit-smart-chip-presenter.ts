import { Result } from "@/cross-cutting-concerns";
import { EditSmartChipUseCase, SmartChipValidationService } from "@/use-cases/interfaces/smart-chip";
import { EditSmartChipPresenter } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { ConcretePresenterNumberOutsideRangeErrorDto, ConcretePresenterStringTooLongErrorDto, ConcretePresenterStringTooShortErrorDto } from "@/interface-adapters/presenters/dtos";

export namespace ConcreteEditSmartChipPresenter {
    export interface ConstructorParameters {
        outputPort: EditSmartChipPresenter.OutputPort;
    }

    export class Presenter implements EditSmartChipUseCase.OutputPort
    {
    	private readonly _outputPort: EditSmartChipPresenter.OutputPort;

    	constructor({ outputPort }: ConstructorParameters)
    	{
    		this._outputPort = outputPort;
    	}

    	public EditResponse({ response }: EditSmartChipUseCase.EditResponseModel): void
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

    		if (response.secondaryValue.code === SmartChipValidationService.Code.LABEL_TOO_SHORT)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Secondary(new ConcretePresenterStringTooShortErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.LABEL_TOO_SHORT,
    					fieldName: "Etiqueta",
    					message: `O campo Etiqueta deve ter no mínimo ${response.secondaryValue.minLength} caracteres.`,
    					value: response.secondaryValue.value,
    					minLength: response.secondaryValue.minLength
    				}))
    			);
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.LABEL_TOO_LONG)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Secondary(new ConcretePresenterStringTooLongErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.LABEL_TOO_LONG,
    					fieldName: "Etiqueta",
    					message: `O campo Etiqueta deve ter no máximo ${response.secondaryValue.maxLength} caracteres.`,
    					value: response.secondaryValue.value,
    					maxLength: response.secondaryValue.maxLength
    				}))
    			);
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.PREFIX_TOO_SHORT)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Secondary(new ConcretePresenterStringTooShortErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.PREFIX_TOO_SHORT,
    					fieldName: "Prefixo",
    					message: `O campo Prefixo deve ter no mínimo ${response.secondaryValue.minLength} caracteres.`,
    					value: response.secondaryValue.value,
    					minLength: response.secondaryValue.minLength
    				}))
    			);
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.PREFIX_TOO_LONG)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Secondary(new ConcretePresenterStringTooLongErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.PREFIX_TOO_LONG,
    					fieldName: "Prefixo",
    					message: `O campo Prefixo deve ter no máximo ${response.secondaryValue.maxLength} caracteres.`,
    					value: response.secondaryValue.value,
    					maxLength: response.secondaryValue.maxLength
    				}))
    			);
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.POSITION_OUTSIDE_RANGE)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Secondary(new ConcretePresenterNumberOutsideRangeErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.POSITION_OUTSIDE_RANGE,
    					fieldName: "Posição",
    					message: `O campo Posição deve estar entre ${response.secondaryValue.minValue} e ${response.secondaryValue.maxValue}.`,
    					value: response.secondaryValue.value,
    					minValue: response.secondaryValue.minValue,
    					maxValue: response.secondaryValue.maxValue
    				}))
    			);
    		}
    	}
    }
}
