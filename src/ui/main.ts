import { Logger } from "@/cross-cutting-concerns/logger";
import { PersistedDto } from "@/features/@dtos";
import { WebConsoleLog } from "@/features/log/infra";
import { PaginatedPresenter } from "@/features/pagination/presenters";
import { IPaginatedView, IPaginatedViewModel } from "@/features/pagination/protocols";
import { PaginatedInMemoryRepository } from "@/features/pagination/repositories";
import { PaginateUseCase } from "@/features/pagination/use-cases";
import { CreateSmartChipPresenter } from "@/features/smart-chip/presenters";
import { ICreateSmartChipView, ISmartChipViewModel } from "@/features/smart-chip/protocols";
import { SmartChipInMemoryRepository } from "@/features/smart-chip/repositories";
import { CreateSmartChipUseCase, SmartChipValidationService } from "@/features/smart-chip/use-cases";
import { WebUuidGenerator } from "@/features/uuid/infra";

class CreateSmartChipHtmlView implements ICreateSmartChipView {
    public RenderSuccess(viewModel: ISmartChipViewModel): void {
        console.log(viewModel);
    }

    public RenderFieldError(field: "label" | "prefix", message: string): void {
        console.log(field, message);
    }

    public RenderMessage(message: string): void {
        console.log(message);
    }
}

class ListSmartChipHtmlView implements IPaginatedView<ISmartChipViewModel> {
    public RenderSuccess(viewModel: IPaginatedViewModel<PersistedDto<ISmartChipViewModel>>): void {
        console.log("RenderSuccess", viewModel);
    }
}

const log = new WebConsoleLog();
const smartChipRepository = new SmartChipInMemoryRepository(new WebUuidGenerator());
const smartChipListRepository = new PaginatedInMemoryRepository(smartChipRepository.smartChips, 2);
const smartChipValidationService = new SmartChipValidationService(new Logger(log, "SmartChipValidationService"));

const listSmartChipView = new ListSmartChipHtmlView();
const listSmartChipPresenter = new PaginatedPresenter(listSmartChipView);
const listSmartChipUseCase = new PaginateUseCase(smartChipListRepository, listSmartChipPresenter, new Logger(log, "PaginateUseCase (SmartChip)"));

const createSmartChipView = new CreateSmartChipHtmlView();
const createSmartChipPresenter = new CreateSmartChipPresenter(createSmartChipView);
const createSmartChipUseCase = new CreateSmartChipUseCase(createSmartChipPresenter, smartChipValidationService, smartChipRepository, new Logger(log, "CreateSmartChipUseCase"));

createSmartChipUseCase.Create("Referência", "ref");
createSmartChipUseCase.Create("Referência2", "ref2");
createSmartChipUseCase.Create("Referência3", "ref3");

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        listSmartChipUseCase.NextPage();
    }

    if (e.key === "ArrowLeft") {
        listSmartChipUseCase.PreviousPage();
    }
});
