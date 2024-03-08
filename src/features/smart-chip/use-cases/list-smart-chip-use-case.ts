import { IListSmartChipUseCaseInputPort, IListSmartChipUseCaseOutputPort, ISmartChipRepository } from "@/features/smart-chip/protocols";

export class ListSmartChipUseCase implements IListSmartChipUseCaseInputPort {
    constructor(
        private readonly outputPort: IListSmartChipUseCaseOutputPort,
        private readonly smartChipRepository: ISmartChipRepository,
    ) { }

    public List(page: number, limit: number): void {
        const smartChipList = this.smartChipRepository.List(page, limit);

        this.outputPort.ListResponse(smartChipList);
    }
}

