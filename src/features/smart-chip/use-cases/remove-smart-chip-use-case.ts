import { ILogger } from "@/cross-cutting-concerns/protocols";
import { CannotFindDto, Result } from "@/shared";
import { IRemoveSmartChipUseCaseInputPort, IRemoveSmartChipUseCaseOutputPort, ISmartChipRepository } from "@/features/smart-chip/protocols";

export class RemoveSmartChipUseCase implements IRemoveSmartChipUseCaseInputPort {
    constructor(
        private readonly outputPort: IRemoveSmartChipUseCaseOutputPort,
        private readonly smartChipRepository: ISmartChipRepository,
        private readonly logger: ILogger
    ) { }

    public Remove(id: string): void {
        const removeResult = this.smartChipRepository.Remove(id);
        if (!removeResult.ok) {
            const dto = new CannotFindDto("SMART_CHIP_NOT_FOUND", "id", id, "SmartChip", `Cannot remove SmartChip entity with id ${id}, because it was not found.`);
            this.logger.Error(dto.message);

            return this.outputPort.RemoveResponse(Result.Fail(dto));
        }

        this.logger.Info(`SmartChip entity with id ${id} was successfully removed.`);
        this.outputPort.RemoveResponse(Result.Ok(id));
    }
}

