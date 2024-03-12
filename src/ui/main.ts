import { Logger } from "@/cross-cutting-concerns/logger";
import { WebConsoleLog } from "@/features/log/infra";
import { IPaginateView } from "@/features/pagination/protocols";
import { PaginatedInMemoryRepository } from "@/features/pagination/repositories";
import { PaginateUseCase } from "@/features/pagination/use-cases";
import { CreateSmartChipPresenter, ListSmartChipPresenter } from "@/features/smart-chip/presenters";
import { ICreateSmartChipView, ISmartChipViewModel } from "@/features/smart-chip/protocols";
import { IPaginatedSmartChipViewModel } from "@/features/smart-chip/protocols/paginated-smart-chip-view-model";
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

class ListSmartChipHtmlView implements IPaginateView<ISmartChipViewModel> {
    public RenderSuccess(paginated: IPaginatedSmartChipViewModel): void {
        console.log("RenderSuccess", paginated);
    }

    public RenderFieldError(field: "page", message: string): void {
        console.log("RenderFieldError", field, message);
    }

    public RenderMessage(message: string): void {
        console.log("RenderError", message);
    }
}

const log = new WebConsoleLog();
const smartChipRepository = new SmartChipInMemoryRepository(new WebUuidGenerator());
const smartChipListRepository = new PaginatedInMemoryRepository(smartChipRepository.smartChips);
const smartChipValidationService = new SmartChipValidationService(new Logger(log, "SmartChipValidationService"));

const listSmartChipView = new ListSmartChipHtmlView();
const listSmartChipPresenter = new ListSmartChipPresenter(listSmartChipView);
const listSmartChipUseCase = new PaginateUseCase(smartChipListRepository, listSmartChipPresenter, new Logger(log, "PaginateUseCase (SmartChip)"));

const createSmartChipView = new CreateSmartChipHtmlView();
const createSmartChipPresenter = new CreateSmartChipPresenter(createSmartChipView);
const createSmartChipUseCase = new CreateSmartChipUseCase(createSmartChipPresenter, smartChipValidationService, smartChipRepository, new Logger(log, "CreateSmartChipUseCase"));

createSmartChipUseCase.Create("Referência", "ref");
createSmartChipUseCase.Create("Referência2", "ref2");
createSmartChipUseCase.Create("Referência3", "ref3");

listSmartChipUseCase.FirstPage();
