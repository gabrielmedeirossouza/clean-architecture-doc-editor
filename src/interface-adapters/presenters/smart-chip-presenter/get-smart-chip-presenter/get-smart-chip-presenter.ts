import { Result } from "@/cross-cutting-concerns";
import { GetSmartChipUseCase } from "@/use-cases/interfaces/smart-chip";
import { GetSmartChipPresenter } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { ConcretePresenterMessageDto } from "@/interface-adapters/presenters/dtos";
import { ConcretePresenterGenericServiceErrorDto } from "@/interface-adapters/presenters/dtos/presenter-generic-service-error-dto";

export namespace ConcreteGetSmartChipPresenter {
    export interface ConstructorParameters {
        outputPort: GetSmartChipPresenter.OutputPort;
    }

    export class Presenter implements GetSmartChipUseCase.OutputPort
    {
    	private readonly _outputPort: GetSmartChipPresenter.OutputPort;

    	constructor({ outputPort }: ConstructorParameters)
    	{
    		this._outputPort = outputPort;
    	}

    	public GetByIdResponse({ response }: GetSmartChipUseCase.GetByIdResponseModel): void
    	{
    		if (response.ok)
    		{
    			return this._outputPort.getSmartChipByIdResponse?.Notify(Result.Ok({
    				id: response.value.id,
    				label: response.value.entity.label,
    				prefix: response.value.entity.prefix,
    			}));
    		}

    		if (response.value.code === GetSmartChipUseCase.Code.SMART_CHIP_NOT_FOUND)
    		{
    			return this._outputPort.getSmartChipByIdResponse?.Notify(Result.Fail(new ConcretePresenterMessageDto.Dto({
    				code: GetSmartChipPresenter.Code.SMART_CHIP_NOT_FOUND,
    				message: "Não foi possível obter o Smart Chip."
    			})));
    		}

    		if (response.value.code === GetSmartChipUseCase.Code.GENERIC_SERVICE_ERROR)
    		{
    			return this._outputPort.getSmartChipByIdResponse?.Notify(Result.Fail(new ConcretePresenterGenericServiceErrorDto.Dto({
    				code: GetSmartChipPresenter.Code.GENERIC_SERVICE_ERROR,
    			})));
    		}
    	}
    }
}
