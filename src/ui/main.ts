import { Logger } from "@/cross-cutting-concerns/logger";
import { IPaginatedEntity } from "@/features/entities/protocols";
import { WebConsoleLog } from "@/features/log/infra";
import { CreateSmartChipPresenter, ListSmartChipPresenter } from "@/features/smart-chip/presenters";
import { ICreateSmartChipView, IListSmartChipView, ISmartChipViewModel } from "@/features/smart-chip/protocols";
import { SmartChipInMemoryRepository } from "@/features/smart-chip/repositories";
import { CreateSmartChipUseCase, ListSmartChipUseCase, SmartChipValidationService } from "@/features/smart-chip/use-cases";
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

class ListSmartChipHtmlView implements IListSmartChipView {
    public RenderSuccess(paginated: IPaginatedEntity<ISmartChipViewModel>): void {
        console.log(paginated);

        if (paginated.totalPages > 1) paginated.NextPage();
    }
}

const log = new WebConsoleLog();
const smartChipRepository = new SmartChipInMemoryRepository(new WebUuidGenerator());
const smartChipValidationService = new SmartChipValidationService(new Logger(log, "SmartChipValidationService"));

const listSmartChipView = new ListSmartChipHtmlView();
const listSmartChipPresenter = new ListSmartChipPresenter(listSmartChipView);
const listSmartChipUseCase = new ListSmartChipUseCase(listSmartChipPresenter, smartChipRepository);

const createSmartChipView = new CreateSmartChipHtmlView();
const createSmartChipPresenter = new CreateSmartChipPresenter(createSmartChipView);
const createSmartChipUseCase = new CreateSmartChipUseCase(createSmartChipPresenter, smartChipValidationService, smartChipRepository, new Logger(log, "CreateSmartChipUseCase"));

listSmartChipUseCase.List(1, 2);

createSmartChipUseCase.Create("Referência", "ref");
createSmartChipUseCase.Create("Referência2", "ref2");
createSmartChipUseCase.Create("Referência3", "ref3");

listSmartChipUseCase.List(1, 2);
