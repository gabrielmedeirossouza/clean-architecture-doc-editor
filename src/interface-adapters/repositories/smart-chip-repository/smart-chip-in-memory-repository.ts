import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";
import { Result } from "@/shared/result";
import { ISmartChipRepository } from "@/use-cases/interfaces/smart-chip";
import { IIdGenerator } from "../../interfaces/id-generator";
import { PersistedEntity } from "@/entities/smart-chip";
import { IRepositoryCannotFindDTO } from "@/use-cases/interfaces/repository-dtos";
import { RepositoryCannotFindDTO } from "../dtos";

export interface ISmartChipInMemoryRepositoryConstructorParameters {
    idGenerator: IIdGenerator;
}

export class SmartChipInMemoryRepository implements ISmartChipRepository
{
	private _smartChips: IPersistedEntity<ISmartChip>[] = [];

	private _idGenerator: IIdGenerator;

	constructor({ idGenerator }: ISmartChipInMemoryRepositoryConstructorParameters)
	{
		this._idGenerator = idGenerator;
	}

	public async Create(smartChip: ISmartChip): Promise<string>
	{
		const id = this._idGenerator.GenerateId();
		const persistedSmartChip = new PersistedEntity(id, smartChip);

		this._smartChips.push(persistedSmartChip);

		return id;
	}

	public async Edit(smartChip: IPersistedEntity<ISmartChip>): Promise<Result<string, IRepositoryCannotFindDTO>>
	{
		const index = this._smartChips.findIndex((item) => item.id === smartChip.id);
		if (index === -1)
		{
			return Result.Secondary(new RepositoryCannotFindDTO({
				searchCriteria: "id",
				searchValue: smartChip.id,
				entityName: "SmartChip",
				message: `SmartChipInMemoryRepository: Cannot edit SmartChip entity, because it was not found.`,
			}));
		}

		this._smartChips[index] = smartChip;

		return Result.Primary(smartChip.id);
	}

	public async Remove(id: string): Promise<Result<string, IRepositoryCannotFindDTO>>
	{
		const index = this._smartChips.findIndex((item) => item.id === id);
		if (index === -1)
		{
			return Result.Secondary(new RepositoryCannotFindDTO({
				searchCriteria: "id",
				searchValue: id,
				entityName: "SmartChip",
				message: `SmartChipInMemoryRepository: Cannot remove SmartChip entity, because it was not found.`,
			}));
		}

		this._smartChips.splice(index, 1);

		return Result.Primary(id);
	}

	public async GetSmartChipById(id: string): Promise<Result<IPersistedEntity<ISmartChip>, IRepositoryCannotFindDTO>>
	{
		const smartChip = this._smartChips.find((item) => item.id === id);
		if (!smartChip)
		{
			return Result.Secondary(new RepositoryCannotFindDTO({
				searchCriteria: "id",
				searchValue: id,
				entityName: "SmartChip",
				message: `SmartChipInMemoryRepository: Cannot get SmartChip entity by id, because it was not found.`,
			}));
		}

		return Result.Primary(smartChip);
	}

	public async GetSmartChipList(): Promise<IPersistedEntity<ISmartChip>[]>
	{
		return this._smartChips;
	}

	public async FindByLabel(label: string): Promise<Result<IPersistedEntity<ISmartChip>, IRepositoryCannotFindDTO>>
	{
		const smartChip = this._smartChips.find((item) => item.entity.label === label);
		if (!smartChip)
		{
			return Result.Secondary(new RepositoryCannotFindDTO({
				searchCriteria: "label",
				searchValue: label,
				entityName: "SmartChip",
				message: `SmartChipInMemoryRepository: Cannot find SmartChip entity by label, because it was not found.`,
			}));
		}

		return Result.Primary(smartChip);
	}

	public async FindByPrefix(prefix: string): Promise<Result<IPersistedEntity<ISmartChip>, IRepositoryCannotFindDTO>>
	{
		const smartChip = this._smartChips.find((item) => item.entity.prefix === prefix);
		if (!smartChip)
		{
			return Result.Secondary(new RepositoryCannotFindDTO({
				searchCriteria: "prefix",
				searchValue: prefix,
				entityName: "SmartChip",
				message: `SmartChipInMemoryRepository: Cannot find SmartChip entity by prefix, because it was not found.`,
			}));
		}

		return Result.Primary(smartChip);
	}

	public async FindByPosition(position: number): Promise<Result<IPersistedEntity<ISmartChip>, IRepositoryCannotFindDTO>>
	{
		const smartChip = this._smartChips.find((item) => item.entity.position === position);
		if (!smartChip)
		{
			return Result.Secondary(new RepositoryCannotFindDTO({
				searchCriteria: "position",
				searchValue: position.toString(),
				entityName: "SmartChip",
				message: `SmartChipInMemoryRepository: Cannot find SmartChip entity by position, because it was not found.`,
			}));
		}

		return Result.Primary(smartChip);
	}
}
