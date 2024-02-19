import { Result } from "@/shared/result";
import { ConcreteStringTooLongErrorDto, ConcreteStringTooShortErrorDto } from "@/use-cases/dtos";
import { SmartChipValidationService } from "@/use-cases/protocols/smart-chip";

export namespace ConcreteSmartChipValidationService {
    export class Service implements SmartChipValidationService.InputPort
    {
    	private readonly _LABEL_MIN_LENGTH = 2;

    	private readonly _LABEL_MAX_LENGTH = 20;

    	private readonly _PREFIX_MIN_LENGTH = 2;

    	private readonly _PREFIX_MAX_LENGTH = 10;

    	private readonly _POSITION_MIN_VALUE = 1;

    	private readonly _POSITION_MAX_VALUE = 1000;

    	public ValidateLabel({ label }: SmartChipValidationService.ValidateLabelRequestModel): SmartChipValidationService.ValidateLabelResponseModel
    	{
    		if (label.length < this._LABEL_MIN_LENGTH)
    		{
    			return {
    				response: Result.Fail(new ConcreteStringTooShortErrorDto.Dto({
    					code: SmartChipValidationService.Code.LABEL_TOO_SHORT,
    					fieldName: "label",
    					value: label,
    					minLength: this._LABEL_MIN_LENGTH
    				}))
    			};
    		}

    		if (label.length > this._LABEL_MAX_LENGTH)
    		{
    			return {
    				response: Result.Fail(new ConcreteStringTooLongErrorDto.Dto({
    					code: SmartChipValidationService.Code.LABEL_TOO_LONG,
    					fieldName: "label",
    					value: label,
    					maxLength: this._LABEL_MAX_LENGTH
    				}))
    			};
    		}

    		return {
    			response: Result.Ok(label)
    		};
    	}

    	public ValidatePrefix({ prefix }: SmartChipValidationService.ValidatePrefixRequestModel): SmartChipValidationService.ValidatePrefixResponseModel
    	{
    		if (prefix.length < this._PREFIX_MIN_LENGTH)
    		{
    			return {
    				response: Result.Fail(new ConcreteStringTooShortErrorDto.Dto({
    					code: SmartChipValidationService.Code.PREFIX_TOO_SHORT,
    					fieldName: "prefix",
    					value: prefix,
    					minLength: this._PREFIX_MIN_LENGTH
    				}))
    			};
    		}

    		if (prefix.length > this._PREFIX_MAX_LENGTH)
    		{
    			return {
    				response: Result.Fail(new ConcreteStringTooLongErrorDto.Dto({
    					code: SmartChipValidationService.Code.PREFIX_TOO_LONG,
    					fieldName: "prefix",
    					value: prefix,
    					maxLength: this._PREFIX_MAX_LENGTH
    				}))
    			};
    		}

    		return {
    			response: Result.Ok(prefix)
    		};
    	}
    }
}
