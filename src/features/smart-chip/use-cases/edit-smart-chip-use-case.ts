import { ILogger } from "@/cross-cutting-concerns/protocols";
import { CannotFindDto, Result } from "@/shared";
import { IEditField, IEditSmartChipUseCaseInputPort, IEditSmartChipUseCaseOutputPort, ISmartChipRepository, ISmartChipValidationService } from "@/features/smart-chip/protocols";

export class EditSmartChipUseCase implements IEditSmartChipUseCaseInputPort {
    constructor(
        private readonly outputPort: IEditSmartChipUseCaseOutputPort,
        private readonly smartChipRepository: ISmartChipRepository,
        private readonly validationService: ISmartChipValidationService,
        private readonly logger: ILogger
    ) { }

    public Edit(id: string, { label, prefix }: IEditField): void {
        const validatedLabelResult = label ? this.validationService.ValidateLabel(label) : Result.Ok(undefined);
        const validatedPrefixResult = prefix ? this.validationService.ValidatePrefix(prefix) : Result.Ok(undefined);

        if (!validatedLabelResult.ok)
            this.outputPort.EditResponse(validatedLabelResult);
        if (!validatedPrefixResult.ok)
            this.outputPort.EditResponse(validatedPrefixResult);

        const failed = !validatedLabelResult.ok || !validatedPrefixResult.ok;
        if (failed) return;

        const idResult = this.smartChipRepository.Get(id);
        if (!idResult.ok) {
            const dto = new CannotFindDto("SMART_CHIP_NOT_FOUND", "id", id, "SmartChip", `Cannot edit SmartChip entity with id ${id}, because it was not found.`);
            this.logger.Error(dto.message);

            return this.outputPort.EditResponse(Result.Fail(dto));
        }

        const persistedSmartChip = idResult.value;
        persistedSmartChip.entity.label = label ?? persistedSmartChip.entity.label;
        persistedSmartChip.entity.prefix = prefix ?? persistedSmartChip.entity.prefix;

        const editResult = this.smartChipRepository.Edit(persistedSmartChip);
        if (!editResult.ok) {
            const dto = new CannotFindDto("SMART_CHIP_NOT_FOUND", "id", id, "SmartChip", `Cannot edit SmartChip entity with id ${id}, because it was not found.`);
            this.logger.Error(dto.message);

            return this.outputPort.EditResponse(Result.Fail(dto));
        }

        this.logger.Info(`SmartChip entity with id ${id} was successfully edited.`);
        this.outputPort.EditResponse(Result.Ok(persistedSmartChip));
    }
}
