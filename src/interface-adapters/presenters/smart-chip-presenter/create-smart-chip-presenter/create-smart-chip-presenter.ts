import { Result } from "@/shared";
import { CreateSmartChipUseCase, SmartChipValidationService } from "@/use-cases/interfaces/smart-chip";
import { CreateSmartChipPresenter } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { ConcretePresenterMessageDto, ConcretePresenterStringTooLongErrorDto, ConcretePresenterStringTooShortErrorDto } from "@/interface-adapters/presenters/dtos";
import { ConcretePresenterGenericServiceErrorDto } from "@/interface-adapters/presenters/dtos/presenter-generic-service-error-dto";

export namespace ConcreteCreateSmartChipPresenter {
    export class Presenter implements CreateSmartChipUseCase.OutputPort
    {
    	constructor(
            private readonly _outputPort: CreateSmartChipPresenter.OutputPort
    	)
    	{ }

    	public CreateResponse({ response }: CreateSmartChipUseCase.CreateResponseModel): void
    	{
    		if (response.ok)
    		{
    			return this._outputPort.createResponse?.Notify(Result.Ok({
    				id: response.value.id,
    				label: response.value.entity.label,
    				prefix: response.value.entity.prefix,
    			}));
    		}

    		if (response.value.code === SmartChipValidationService.Code.LABEL_TOO_SHORT)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Fail(new ConcretePresenterStringTooShortErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.LABEL_TOO_SHORT,
    					fieldName: "Etiqueta",
    					message: `O Campo Etiqueta deve ter pelo menos ${response.value.minLength} caracteres.`,
    					value: response.value.value,
    					minLength: response.value.minLength
    				}))
    			);
    		}

    		if (response.value.code === SmartChipValidationService.Code.LABEL_TOO_LONG)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Fail(new ConcretePresenterStringTooLongErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.LABEL_TOO_LONG,
    					fieldName: "Etiqueta",
    					message: `O Campo Etiqueta deve ter no máximo ${response.value.maxLength} caracteres.`,
    					value: response.value.value,
    					maxLength: response.value.maxLength
    				}))
    			);
    		}

    		if (response.value.code === SmartChipValidationService.Code.PREFIX_TOO_SHORT)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Fail(new ConcretePresenterStringTooShortErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.PREFIX_TOO_SHORT,
    					fieldName: "Prefixo",
    					message: `O Campo Prefixo deve ter pelo menos ${response.value.minLength} caracteres.`,
    					value: response.value.value,
    					minLength: response.value.minLength
    				}))
    			);
    		}

    		if (response.value.code === SmartChipValidationService.Code.PREFIX_TOO_LONG)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Fail(new ConcretePresenterStringTooLongErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.PREFIX_TOO_LONG,
    					fieldName: "Prefixo",
    					message: `O Campo Prefixo deve ter no máximo ${response.value.maxLength} caracteres.`,
    					value: response.value.value,
    					maxLength: response.value.maxLength
    				}))
    			);
    		}

    		if (response.value.code === CreateSmartChipUseCase.Code.LABEL_ALREADY_EXISTS)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Fail(new ConcretePresenterMessageDto.Dto({
    					code: CreateSmartChipPresenter.Code.LABEL_ALREADY_EXISTS,
    					message: `Um Smart Chip com essa Etiqueta já existe.`
    				}))
    			);
    		}

    		if (response.value.code === CreateSmartChipUseCase.Code.PREFIX_ALREADY_EXISTS)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Fail(new ConcretePresenterMessageDto.Dto({
    					code: CreateSmartChipPresenter.Code.PREFIX_ALREADY_EXISTS,
    					message: `Um Smart Chip com esse Prefixo já existe.`
    				}))
    			);
    		}

    		if (response.value.code === CreateSmartChipUseCase.Code.GENERIC_SERVICE_ERROR)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Fail(new ConcretePresenterGenericServiceErrorDto.Dto({ code: CreateSmartChipPresenter.Code.GENERIC_SERVICE_ERROR }))
    			);
    		}
    	}
    }

}
