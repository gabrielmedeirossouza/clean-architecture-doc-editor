import { ILogger } from "@/cross-cutting-concerns/protocols/logger-protocol";
import { MessageDto, Result } from "@/shared";
import { PersistedEntity } from "@/entities/smart-chip/persisted-entity";
import { SmartChip } from "@/entities/smart-chip/smart-chip";
import { ICreateSmartChipUseCaseInputPort, ICreateSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/create-smart-chip-use-case";
import { ISmartChipRepository } from "@/use-cases/protocols/smart-chip/smart-chip-repository";
import { ISmartChipValidationService } from "@/use-cases/protocols/smart-chip/smart-chip-validation-service";

export class CreateSmartChipUseCase implements ICreateSmartChipUseCaseInputPort {
	constructor(
        private readonly outputPort: ICreateSmartChipUseCaseOutputPort,
        private readonly smartChipValidationService: ISmartChipValidationService,
        private readonly smartChipRepository: ISmartChipRepository,
        private readonly logger: ILogger
	) {}

	public Create(label: string, prefix: string): void {
		const validatedLabelResult = this.smartChipValidationService.ValidateLabel(label);
		const validatedPrefixResult = this.smartChipValidationService.ValidatePrefix(prefix);

		if (!validatedLabelResult.ok) this.outputPort.CreateResponse(validatedLabelResult);
		if (!validatedPrefixResult.ok) this.outputPort.CreateResponse(validatedPrefixResult);

		const getByLabelResult = this.smartChipRepository.GetByLabel(label);
		const getByPrefixResult = this.smartChipRepository.GetByPrefix(prefix);

		if (getByLabelResult.ok) {
			const dto = new MessageDto("LABEL_ALREADY_EXISTS", `Cannot create SmartChip entity, because a SmartChip with label "${label}" already exists.`);
			this.logger.Warn(dto.message);
			this.outputPort.CreateResponse(Result.Fail(dto));
		}

		if (getByPrefixResult.ok) {
			const dto = new MessageDto("PREFIX_ALREADY_EXISTS", `Cannot create SmartChip entity, because a SmartChip with prefix "${prefix}" already exists.`);
			this.logger.Warn(dto.message);
			this.outputPort.CreateResponse(Result.Fail(dto));
		}

		const failed = !validatedLabelResult.ok || !validatedPrefixResult.ok || getByLabelResult.ok || getByPrefixResult.ok;
		if (failed) return;

		const smartChip = new SmartChip(label, prefix);
		const id = this.smartChipRepository.Create(smartChip);
		const persistedSmartChip = new PersistedEntity(id, smartChip);
		this.logger.Info("SmartChip entity created successfully.");
		this.outputPort.CreateResponse(Result.Ok(persistedSmartChip));
	}
}

