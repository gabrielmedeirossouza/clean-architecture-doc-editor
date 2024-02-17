import { Result } from "@/cross-cutting-concerns";
import { CreateSmartChipUseCase, SmartChipValidationService } from "@/use-cases/interfaces/smart-chip";
import { CreateSmartChipPresenter } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { ConcretePresenterMessageDto, ConcretePresenterNumberOutsideRangeErrorDto, ConcretePresenterStringTooLongErrorDto, ConcretePresenterStringTooShortErrorDto } from "@/interface-adapters/presenters/dtos";
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
    		if (response.isPrimary)
    		{
    			return this._outputPort.createResponse?.Notify(Result.Primary({
    				id: response.primaryValue.id,
    				label: response.primaryValue.entity.label,
    				prefix: response.primaryValue.entity.prefix,
    				position: response.primaryValue.entity.position
    			}));
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.LABEL_TOO_SHORT)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterStringTooShortErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.LABEL_TOO_SHORT,
    					fieldName: "Etiqueta",
    					message: `O Campo Etiqueta deve ter pelo menos ${response.secondaryValue.minLength} caracteres.`,
    					value: response.secondaryValue.value,
    					minLength: response.secondaryValue.minLength
    				}))
    			);
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.LABEL_TOO_LONG)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterStringTooLongErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.LABEL_TOO_LONG,
    					fieldName: "Etiqueta",
    					message: `O Campo Etiqueta deve ter no máximo ${response.secondaryValue.maxLength} caracteres.`,
    					value: response.secondaryValue.value,
    					maxLength: response.secondaryValue.maxLength
    				}))
    			);
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.PREFIX_TOO_SHORT)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterStringTooShortErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.PREFIX_TOO_SHORT,
    					fieldName: "Prefixo",
    					message: `O Campo Prefixo deve ter pelo menos ${response.secondaryValue.minLength} caracteres.`,
    					value: response.secondaryValue.value,
    					minLength: response.secondaryValue.minLength
    				}))
    			);
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.PREFIX_TOO_LONG)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterStringTooLongErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.PREFIX_TOO_LONG,
    					fieldName: "Prefixo",
    					message: `O Campo Prefixo deve ter no máximo ${response.secondaryValue.maxLength} caracteres.`,
    					value: response.secondaryValue.value,
    					maxLength: response.secondaryValue.maxLength
    				}))
    			);
    		}

    		if (response.secondaryValue.code === SmartChipValidationService.Code.POSITION_OUTSIDE_RANGE)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterNumberOutsideRangeErrorDto.Dto({
    					code: CreateSmartChipPresenter.Code.POSITION_OUTSIDE_RANGE,
    					fieldName: "Posição",
    					message: `O Campo Posição deve ser entre ${response.secondaryValue.minValue} e ${response.secondaryValue.maxValue}.`,
    					value: response.secondaryValue.value,
    					minValue: response.secondaryValue.minValue,
    					maxValue: response.secondaryValue.maxValue
    				}))
    			);
    		}

    		if (response.secondaryValue.code === CreateSmartChipUseCase.Code.LABEL_ALREADY_EXISTS)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterMessageDto.Dto({
    					code: CreateSmartChipPresenter.Code.LABEL_ALREADY_EXISTS,
    					message: `Um Smart Chip com essa Etiqueta já existe.`
    				}))
    			);
    		}

    		if (response.secondaryValue.code === CreateSmartChipUseCase.Code.PREFIX_ALREADY_EXISTS)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterMessageDto.Dto({
    					code: CreateSmartChipPresenter.Code.PREFIX_ALREADY_EXISTS,
    					message: `Um Smart Chip com esse Prefixo já existe.`
    				}))
    			);
    		}

    		if (response.secondaryValue.code === CreateSmartChipUseCase.Code.POSITION_ALREADY_EXISTS)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterMessageDto.Dto({
    					code: CreateSmartChipPresenter.Code.POSITION_ALREADY_EXISTS,
    					message: `Um Smart Chip com essa Posição já existe.`
    				}))
    			);
    		}

    		if (response.secondaryValue.code === CreateSmartChipUseCase.Code.GENERIC_SERVICE_ERROR)
    		{
    			return this._outputPort.createResponse?.Notify(
    				Result.Secondary(new ConcretePresenterGenericServiceErrorDto.Dto({ code: CreateSmartChipPresenter.Code.GENERIC_SERVICE_ERROR }))
    			);
    		}
    	}
    }

}
