import { ICreateSmartChipUseCaseInputPort, IEditSmartChipUseCaseInputPort, IGetSmartChipUseCaseInputPort, IListSmartChipUseCaseInputPort, IRemoveSmartChipUseCaseInputPort, ISmartChipController } from "@/features/smart-chip/protocols";

export class SmartChipController implements ISmartChipController {
    constructor(
        private readonly createSmartChipUseCase: ICreateSmartChipUseCaseInputPort,
        private readonly editSmartChipUseCase: IEditSmartChipUseCaseInputPort,
        private readonly getSmartChipUseCase: IGetSmartChipUseCaseInputPort,
        private readonly listSmartChipUseCase: IListSmartChipUseCaseInputPort,
        private readonly removeSmartChipUseCase: IRemoveSmartChipUseCaseInputPort,
    ) { }

    public Create(label: string, prefix: string): void {
        this.createSmartChipUseCase.Create(label, prefix);
    }

    public Edit(id: string, fields: { label?: string | undefined; prefix?: string | undefined; }): void {
        this.editSmartChipUseCase.Edit(id, fields);
    }

    public GetById(id: string): void {
        this.getSmartChipUseCase.GetById(id);
    }

    public List(page: number, limit: number): void {
        this.listSmartChipUseCase.List(page, limit);
    }

    public Remove(id: string): void {
        this.removeSmartChipUseCase.Remove(id);
    }
}
