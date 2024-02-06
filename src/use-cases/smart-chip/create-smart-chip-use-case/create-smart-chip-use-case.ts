import { SmartChip } from "@/entities/smart-chip";
import { Result } from "@/shared/result";
import { MessageDTO } from "@/use-cases/dtos";
import { ICreateSmartChipUseCaseInputPort, ICreateSmartChipUseCaseOutputPort, ICreateSmartChipUseCaseRequestModel } from "@/use-cases/interfaces/smart-chip/create-smart-chip-use-case";
import { ISmartChipValidationService } from "@/use-cases/interfaces/smart-chip/smart-chip-validation-service";

export class CreateSmartChipUseCase implements ICreateSmartChipUseCaseInputPort {
	constructor(
		private readonly smartChipValidationService: ISmartChipValidationService,
		private readonly outputPort: ICreateSmartChipUseCaseOutputPort
	) { }

	public create({ name, label, prefix, position }: ICreateSmartChipUseCaseRequestModel) {
		const compose = Result.compose()
			.addFailChecker(this.smartChipValidationService.validateLabel(name), (response) => this.outputPort.nameResponse({ response }))
			.addFailChecker(this.smartChipValidationService.validateLabel(label), (response) => this.outputPort.labelResponse({ response }))
			.addFailChecker(this.smartChipValidationService.validatePrefix(prefix), (response) => this.outputPort.prefixResponse({ response }))
			.addFailChecker(this.smartChipValidationService.validatePosition(position), (response) => this.outputPort.PositionResponse({ response }))
			.check();

		if (compose.someFailed)
			return this.outputPort.response({
				response: Result.fail(new MessageDTO("CreateSmartChipUseCase create error."))
			});

		const smartSmartChip = new SmartChip(name, label, prefix, position, []);

		return this.outputPort.response({ response: Result.ok(smartSmartChip) });
	}
}