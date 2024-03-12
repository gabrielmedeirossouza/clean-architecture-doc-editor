import { ILogger } from "@/cross-cutting-concerns/protocols";
import { ICreateSmartChipUseCaseInputPort, ICreateSmartChipUseCaseOutputPort, ISmartChipRepository, ISmartChipValidationService } from "@/features/smart-chip/protocols";
import { MessageDto, Result } from "@/shared";
import { SmartChipEntity } from "@/features/smart-chip/entities";
import { PersistedDto } from "@/features/@dtos";

export class CreateSmartChipUseCase implements ICreateSmartChipUseCaseInputPort {
    constructor(
        private readonly outputPort: ICreateSmartChipUseCaseOutputPort,
        private readonly smartChipValidationService: ISmartChipValidationService,
        private readonly smartChipRepository: ISmartChipRepository,
        private readonly logger: ILogger
    ) { }

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

        const smartChip = new SmartChipEntity(label, prefix);
        const id = this.smartChipRepository.Create(smartChip);
        const persistedSmartChip = new PersistedDto(id, smartChip);
        this.logger.Info("SmartChip entity created successfully.");
        this.outputPort.CreateResponse(Result.Ok(persistedSmartChip));
    }
}

