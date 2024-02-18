import { Result } from "@/shared";
import { RemoveSmartChipUseCase } from "@/use-cases/interfaces/smart-chip";
import { RemoveSmartChipPresenter } from "@/interface-adapters/interfaces/presenters/smart-chip-presenter";
import { ConcretePresenterMessageDto } from "@/interface-adapters/presenters/dtos";
import { ConcretePresenterGenericServiceErrorDto } from "@/interface-adapters/presenters/dtos/presenter-generic-service-error-dto";

export namespace ConcreteRemoveSmartChipPresenter {
    export interface ConstructorParameters {
        outputPort: RemoveSmartChipPresenter.OutputPort;
    }

    export class Presenter implements RemoveSmartChipUseCase.OutputPort
    {
    	private readonly _outputPort: RemoveSmartChipPresenter.OutputPort;

    	constructor({ outputPort }: ConstructorParameters)
    	{
    		this._outputPort = outputPort;
    	}

    	public RemoveResponse({ response }: RemoveSmartChipUseCase.RemoveResponseModel): void
    	{
    		if (response.ok)
    		{
    			return this._outputPort.removeResponse?.Notify(response);
    		}

    		if (response.value.code === RemoveSmartChipUseCase.Code.SMART_CHIP_NOT_FOUND)
    		{
    			return this._outputPort.removeResponse?.Notify(Result.Fail(new ConcretePresenterMessageDto.Dto({
    				code: RemoveSmartChipPresenter.Code.SMART_CHIP_NOT_FOUND,
    				message: "Não foi possível remover o Smart Chip."
    			})));
    		}

    		if (response.value.code === RemoveSmartChipUseCase.Code.GENERIC_SERVICE_ERROR)
    		{
    			return this._outputPort.removeResponse?.Notify(Result.Fail(new ConcretePresenterGenericServiceErrorDto.Dto({ code: RemoveSmartChipPresenter.Code.GENERIC_SERVICE_ERROR })));
    		}
    	}
    }
}
