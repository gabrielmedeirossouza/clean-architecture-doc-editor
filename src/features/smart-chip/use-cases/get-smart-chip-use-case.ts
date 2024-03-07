import { ILogger } from "@/cross-cutting-concerns/protocols";
import { CannotFindDto, Result } from "@/shared";
import { IGetSmartChipUseCaseInputPort, IGetSmartChipUseCaseOutputPort, ISmartChipRepository } from "@/features/smart-chip/protocols";

export class GetSmartChipUseCase implements IGetSmartChipUseCaseInputPort {
    constructor(
        private outputPort: IGetSmartChipUseCaseOutputPort,
        private smartChipRepository: ISmartChipRepository,
        private logger: ILogger
    ) { }

    public GetById(id: string): void {
        const persistedSmartChipResult = this.smartChipRepository.Get(id);
        if (!persistedSmartChipResult.ok) {
            const dto = new CannotFindDto("SMART_CHIP_NOT_FOUND", "id", id, "SmartChip", `Cannot get SmartChip entity with id ${id}, because it was not found.`);
            this.logger.Error(dto.message);

            return this.outputPort.GetByIdResponse(Result.Fail(dto));
        }

        this.logger.Info(`SmartChip entity with id ${id} was successfully retrieved.`);
        this.outputPort.GetByIdResponse(Result.Ok(persistedSmartChipResult.value));
    }
}
