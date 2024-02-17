import { Result } from "@/cross-cutting-concerns/result";
import { PersistedEntity, SmartChip } from "@/entities/interfaces";
import { SmartChipRepository } from "@/use-cases/interfaces/smart-chip";
import { IIdGenerator } from "@/interface-adapters/interfaces/id-generator";
import { ConcreteRepositoryCannotFindDto } from "@/interface-adapters/repositories/dtos";

export namespace ConcreteSmartChipInMemoryRepository {
    export interface ConstructorParameters {
        idGenerator: IIdGenerator;
    }

    export class Repository implements SmartChipRepository.InputPort
    {
    	private _smartChips: PersistedEntity<SmartChip>[] = [];

    	private _idGenerator: IIdGenerator;

    	constructor({ idGenerator }: ConstructorParameters)
    	{
    		this._idGenerator = idGenerator;
    	}

    	public async Create({ smartChip }: SmartChipRepository.CreateRequestModel): Promise<SmartChipRepository.CreateResponseModel>
    	{
    		const id = this._idGenerator.GenerateId();

    		this._smartChips.push({
    			id,
    			entity: smartChip
    		});

    		return { response: Result.Primary(id) };
    	}

    	public async Edit({ smartChip }: SmartChipRepository.EditRequestModel): Promise<SmartChipRepository.EditResponseModel>
    	{
    		const index = this._smartChips.findIndex((item) => item.id === smartChip.id);
    		if (index === -1)
    		{
    			return {
    				response: Result.Secondary(new ConcreteRepositoryCannotFindDto.Dto({
    					code: SmartChipRepository.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: "id",
    					searchValue: smartChip.id,
    					entityName: "SmartChip",
    					message: `Cannot edit SmartChip entity with id ${smartChip.id}, because it was not found.`,
    				}))
    			};
    		}

    		this._smartChips[index] = smartChip;

    		return {
    			response: Result.Primary(smartChip.id)
    		};
    	}

    	public async Remove({ id }: SmartChipRepository.RemoveRequestModel): Promise<SmartChipRepository.RemoveResponseModel>
    	{
    		const index = this._smartChips.findIndex((item) => item.id === id);
    		if (index === -1)
    		{
    			return {
    				response: Result.Secondary(new ConcreteRepositoryCannotFindDto.Dto({
    					code: SmartChipRepository.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: "id",
    					searchValue: id,
    					entityName: "SmartChip",
    					message: `Cannot remove SmartChip entity with id ${id}, because it was not found.`,
    				}))
    			};
    		}

    		this._smartChips.splice(index, 1);

    		return {
    			response: Result.Primary(id)
    		};
    	}

    	public async Get({ id }: SmartChipRepository.GetRequestModel): Promise<SmartChipRepository.GetResponseModel>
    	{
    		const smartChip = this._smartChips.find((item) => item.id === id);
    		if (!smartChip)
    		{
    			return {
    				response: Result.Secondary(new ConcreteRepositoryCannotFindDto.Dto({
    					code: SmartChipRepository.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: "id",
    					searchValue: id,
    					entityName: "SmartChip",
    					message: `Cannot get SmartChip entity with id ${id}, because it was not found.`,
    				}))
    			};
    		}

    		return {
    			response: Result.Primary(smartChip)
    		};
    	}

    	public async List(): Promise<SmartChipRepository.ListResponseModel>
    	{
    		return {
    			response: this._smartChips
    		};
    	}

    	public async FindByLabel({ label }: SmartChipRepository.FindByLabelRequestModel): Promise<SmartChipRepository.FindByLabelResponseModel>
    	{
    		const smartChip = this._smartChips.find((item) => item.entity.label === label);
    		if (!smartChip)
    		{
    			return {
    				response: Result.Secondary(new ConcreteRepositoryCannotFindDto.Dto({
    					code: SmartChipRepository.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: "label",
    					searchValue: label,
    					entityName: "SmartChip",
    					message: `Cannot find SmartChip entity with label ${label}, because it was not found.`,
    				}))
    			};
    		}

    		return {
    			response: Result.Primary(smartChip)
    		};
    	}

    	public async FindByPrefix({ prefix }: SmartChipRepository.FindByPrefixRequestModel): Promise<SmartChipRepository.FindByPrefixResponseModel>
    	{
    		const smartChip = this._smartChips.find((item) => item.entity.prefix === prefix);
    		if (!smartChip)
    		{
    			return {
    				response: Result.Secondary(new ConcreteRepositoryCannotFindDto.Dto({
    					code: SmartChipRepository.Code.SMART_CHIP_NOT_FOUND,
    					searchCriteria: "prefix",
    					searchValue: prefix,
    					entityName: "SmartChip",
    					message: `Cannot find SmartChip entity with prefix ${prefix}, because it was not found.`,
    				}))
    			};
    		}

    		return {
    			response: Result.Primary(smartChip)
    		};
    	}
    }
}
