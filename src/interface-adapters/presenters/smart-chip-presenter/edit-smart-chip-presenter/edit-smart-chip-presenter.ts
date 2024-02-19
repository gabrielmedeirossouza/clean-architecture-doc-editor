import { Result } from "@/shared";
import { EditSmartChipUseCase, SmartChipValidationService } from "@/use-cases/protocols/smart-chip";
import { EditSmartChipPresenter } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { ConcretePresenterStringTooLongErrorDto, ConcretePresenterStringTooShortErrorDto } from "@/interface-adapters/presenters/dtos";

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
    		if (response.ok)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Ok({
    					id: response.value.id,
    					label: response.value.entity.label,
    					prefix: response.value.entity.prefix,
    				})
    			);
    		}

    		if (response.value.code === SmartChipValidationService.Code.LABEL_TOO_SHORT)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Fail(new ConcretePresenterStringTooShortErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.LABEL_TOO_SHORT,
    					fieldName: "Etiqueta",
    					message: `O campo Etiqueta deve ter no mínimo ${response.value.minLength} caracteres.`,
    					value: response.value.value,
    					minLength: response.value.minLength
    				}))
    			);
    		}

    		if (response.value.code === SmartChipValidationService.Code.LABEL_TOO_LONG)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Fail(new ConcretePresenterStringTooLongErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.LABEL_TOO_LONG,
    					fieldName: "Etiqueta",
    					message: `O campo Etiqueta deve ter no máximo ${response.value.maxLength} caracteres.`,
    					value: response.value.value,
    					maxLength: response.value.maxLength
    				}))
    			);
    		}

    		if (response.value.code === SmartChipValidationService.Code.PREFIX_TOO_SHORT)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Fail(new ConcretePresenterStringTooShortErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.PREFIX_TOO_SHORT,
    					fieldName: "Prefixo",
    					message: `O campo Prefixo deve ter no mínimo ${response.value.minLength} caracteres.`,
    					value: response.value.value,
    					minLength: response.value.minLength
    				}))
    			);
    		}

    		if (response.value.code === SmartChipValidationService.Code.PREFIX_TOO_LONG)
    		{
    			return this._outputPort.editResponse?.Notify(
    				Result.Fail(new ConcretePresenterStringTooLongErrorDto.Dto({
    					code: EditSmartChipPresenter.Code.PREFIX_TOO_LONG,
    					fieldName: "Prefixo",
    					message: `O campo Prefixo deve ter no máximo ${response.value.maxLength} caracteres.`,
    					value: response.value.value,
    					maxLength: response.value.maxLength
    				}))
    			);
    		}
    	}
    }
}
