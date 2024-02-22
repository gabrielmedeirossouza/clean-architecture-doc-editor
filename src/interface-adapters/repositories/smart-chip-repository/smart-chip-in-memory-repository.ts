import { Result } from "@/shared/result";
import { CannotFindDto } from "@/shared";
import { IPersistedEntity } from "@/entities/protocols/persisted-entity";
import { ISmartChip } from "@/entities/protocols/smart-chip";
import { ISmartChipRepository } from "@/use-cases/protocols/smart-chip/smart-chip-repository";
import { IUuidGenerator } from "@/interface-adapters/protocols/uuid-generator";

export class SmartChipInMemoryRepository implements ISmartChipRepository {
	private smartChips: IPersistedEntity<ISmartChip>[] = [];

	constructor(private readonly uuidGenerator: IUuidGenerator) { }

	public Create(smartChip: ISmartChip): string {
		const id = this.uuidGenerator.GenerateUuidV4();

		this.smartChips.push({
			id,
			entity: smartChip
		});

		return id;
	}

	public Edit(smartChip: IPersistedEntity<ISmartChip>): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">> {
		const index = this.smartChips.findIndex((item) => item.id === smartChip.id);
		if (index === -1)
			return Result.Fail(new CannotFindDto("SMART_CHIP_NOT_FOUND", "id", smartChip.id, "SmartChip", `Cannot edit SmartChip entity with id ${smartChip.id}, because it was not found.`));

		this.smartChips[index] = smartChip;

		return Result.Ok(smartChip.id);
	}

	public Remove(id: string): Result<string, CannotFindDto<"SMART_CHIP_NOT_FOUND">> {
		const index = this.smartChips.findIndex((item) => item.id === id);
		if (index === -1)
			return Result.Fail(new CannotFindDto("SMART_CHIP_NOT_FOUND", "id", id, "SmartChip", `Cannot remove SmartChip entity with id ${id}, because it was not found.`));

		this.smartChips.splice(index, 1);

		return Result.Ok(id);
	}

	public Get(id: string): Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND">> {
		const smartChip = this.smartChips.find((item) => item.id === id);
		if (!smartChip)
			return Result.Fail(new CannotFindDto("SMART_CHIP_NOT_FOUND", "id", id, "SmartChip", `Cannot get SmartChip entity with id ${id}, because it was not found.`));

		return Result.Ok(smartChip);
	}

	public List(): IPersistedEntity<ISmartChip>[] {
		return this.smartChips;
	}

	public GetByLabel(label: string): Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND">> {
		const smartChip = this.smartChips.find((item) => item.entity.label === label);
		if (!smartChip)
			return Result.Fail(new CannotFindDto("SMART_CHIP_NOT_FOUND", "label", label, "SmartChip", `Cannot find SmartChip entity with label ${label}, because it was not found.`));

		return Result.Ok(smartChip);
	}

	public GetByPrefix(prefix: string): Result<IPersistedEntity<ISmartChip>, CannotFindDto<"SMART_CHIP_NOT_FOUND">> {
		const smartChip = this.smartChips.find((item) => item.entity.prefix === prefix);
		if (!smartChip)
			return Result.Fail(new CannotFindDto("SMART_CHIP_NOT_FOUND", "prefix", prefix, "SmartChip", `Cannot find SmartChip entity with prefix ${prefix}, because it was not found.`));

		return Result.Ok(smartChip);
	}
}
