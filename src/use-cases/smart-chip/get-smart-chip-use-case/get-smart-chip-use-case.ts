import { ILogger } from "@/cross-cutting-concerns/protocols/logger-protocol";
import { CannotFindDto, Result, SuccessDto } from "@/shared";
import { IGetSmartChipUseCaseInputPort, IGetSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/get-smart-chip-use-case";
import { ISmartChipRepository } from "@/use-cases/protocols/smart-chip/smart-chip-repository";

export class GetSmartChipUseCase implements IGetSmartChipUseCaseInputPort {
	constructor(
        private outputPort: IGetSmartChipUseCaseOutputPort,
        private smartChipRepository: ISmartChipRepository,
        private logger: ILogger
	) { }

	public GetById(id: string): void {
		const persistedSmartChipResult  = this.smartChipRepository.Get(id);
		if (!persistedSmartChipResult.ok) {
			const dto = new CannotFindDto("SMART_CHIP_NOT_FOUND", 'id', id, "SmartChip", `Cannot get SmartChip entity with id ${id}, because it was not found.`);
			this.logger.Error(dto.message);

			return this.outputPort.GetByIdResponse(Result.Fail(dto));
		}

		const dto = new SuccessDto(persistedSmartChipResult.value, `SmartChip entity with id ${id} was successfully retrieved.`);
		this.logger.Info(dto.message);
		this.outputPort.GetByIdResponse(Result.Ok(dto));
	}
}
