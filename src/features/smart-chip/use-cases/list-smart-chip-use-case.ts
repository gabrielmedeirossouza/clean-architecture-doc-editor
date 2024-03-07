import { IListSmartChipUseCaseInputPort, IListSmartChipUseCaseOutputPort, ISmartChipRepository } from "@/features/smart-chip/protocols";

export class ListSmartChipUseCase implements IListSmartChipUseCaseInputPort {
    constructor(
        private readonly outputPort: IListSmartChipUseCaseOutputPort,
        private readonly smartChipRepository: ISmartChipRepository,
    ) { }

    public List(): void {
        const smartChipList = this.smartChipRepository.List();

        this.outputPort.ListResponse(smartChipList);
    }
}

