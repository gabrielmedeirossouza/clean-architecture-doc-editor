import { IPersistedEntity, ISmartChip } from "@/entities/interfaces";
import { Result } from "@/shared/result";
import { ISmartChipRepository } from "@/use-cases/interfaces/smart-chip";
import { IIdGenerator } from "../interfaces/id-generator";
import { PersistedEntity } from "@/entities/smart-chip";

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

	public async Create(smartChip: ISmartChip): Promise<Result<string, void>>
	{
		const id = this._idGenerator.GenerateId();
		const persistedSmartChip = new PersistedEntity(id, smartChip);

		this._smartChips.push(persistedSmartChip);

		return Result.Ok(id);
	}

	public async Edit(smartChip: IPersistedEntity<ISmartChip>): Promise<Result<string, void>>
	{
		const index = this._smartChips.findIndex((item) => item.id === smartChip.id);
		if (index === -1)
		{
			return Result.Fail(undefined);
		}

		this._smartChips[index] = smartChip;

		return Result.Ok(smartChip.id);
	}

	public async GetSmartChipById(id: string): Promise<Result<IPersistedEntity<ISmartChip>, void>>
	{
		const smartChip = this._smartChips.find((item) => item.id === id);
		if (!smartChip)
		{
			return Result.Fail(undefined);
		}

		return Result.Ok(smartChip);
	}

	public async GetSmartChips(): Promise<Result<IPersistedEntity<ISmartChip>[], void>>
	{
		return Result.Ok(this._smartChips);
	}

	public async Remove(id: string): Promise<Result<string, void>>
	{
		const index = this._smartChips.findIndex((item) => item.id === id);
		if (index === -1)
		{
			return Result.Fail(undefined);
		}

		this._smartChips.splice(index, 1);

		return Result.Ok(id);
	}

	public async FindByLabel(label: string): Promise<Result<IPersistedEntity<ISmartChip>, void>>
	{
		const smartChip = this._smartChips.find((item) => item.entity.label === label);
		if (!smartChip)
		{
			return Result.Fail(undefined);
		}

		return Result.Ok(smartChip);
	}

	public async FindByPrefix(prefix: string): Promise<Result<IPersistedEntity<ISmartChip>, void>>
	{
		const smartChip = this._smartChips.find((item) => item.entity.prefix === prefix);
		if (!smartChip)
		{
			return Result.Fail(undefined);
		}

		return Result.Ok(smartChip);
	}

	public async FindByPosition(position: number): Promise<Result<IPersistedEntity<ISmartChip>, void>>
	{
		const smartChip = this._smartChips.find((item) => item.entity.position === position);
		if (!smartChip)
		{
			return Result.Fail(undefined);
		}

		return Result.Ok(smartChip);
	}
}
