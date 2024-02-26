import { IListSmartChipUseCaseInputPort, IListSmartChipUseCaseOutputPort } from "@/use-cases/protocols/smart-chip/list-smart-chip-use-case";
import { ISmartChipRepository } from "@/use-cases/protocols/smart-chip/smart-chip-repository";

export class ListSmartChipUseCase implements IListSmartChipUseCaseInputPort {
	constructor(
        private readonly outputPort: IListSmartChipUseCaseOutputPort,
        private readonly smartChipRepository: ISmartChipRepository,
	) { }

	public List(): void {
		const smartChipList  = this.smartChipRepository.List();

		this.outputPort.ListResponse(smartChipList);
	}
}

