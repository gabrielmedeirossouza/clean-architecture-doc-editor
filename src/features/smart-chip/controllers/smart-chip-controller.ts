import { IPaginateUseCaseInputPort } from "@/features/pagination/protocols";
import { ICreateSmartChipUseCaseInputPort, IEditSmartChipUseCaseInputPort, IGetSmartChipUseCaseInputPort, IRemoveSmartChipUseCaseInputPort, ISmartChipController } from "@/features/smart-chip/protocols";

export class SmartChipController implements ISmartChipController {
    constructor(
        private readonly createSmartChipUseCase: ICreateSmartChipUseCaseInputPort,
        private readonly editSmartChipUseCase: IEditSmartChipUseCaseInputPort,
        private readonly getSmartChipUseCase: IGetSmartChipUseCaseInputPort,
        private readonly paginateUseCase: IPaginateUseCaseInputPort,
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

    public FirstPage(): void {
        this.paginateUseCase.FirstPage();
    }

    public LastPage(): void {
        this.paginateUseCase.LastPage();
    }

    public PreviousPage(): void {
        this.paginateUseCase.PreviousPage();
    }

    public NextPage(): void {
        this.paginateUseCase.NextPage();
    }

    public GoToPage(page: number): void {
        this.paginateUseCase.GoToPage(page);
    }

    public Remove(id: string): void {
        this.removeSmartChipUseCase.Remove(id);
    }
}
