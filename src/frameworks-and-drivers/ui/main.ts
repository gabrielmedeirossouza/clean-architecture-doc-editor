import { ConcreteWebDtoLoggerProxy, WebIdGenerator } from "@/frameworks-and-drivers/infra";
import { ConcreteCreateSmartChipUseCase, ConcreteSmartChipValidationService } from "@/use-cases/smart-chip";
import { ConcreteCreateSmartChipPresenter } from "@/interface-adapters/presenters/smart-chip-presenter";
import { ConcreteSmartChipInMemoryRepository } from "@/interface-adapters/repositories/smart-chip-repository";

const dtoLogger = new ConcreteWebDtoLoggerProxy.Proxy({ origin: "CreateSmartChipUseCase" });
const smartChipValidationService = new ConcreteSmartChipValidationService.Service();
const createSmartChipPresenter = new ConcreteCreateSmartChipPresenter.Presenter({});
const smartChipRepository = new ConcreteSmartChipInMemoryRepository.Repository({
	idGenerator: new WebIdGenerator()
});
const createSmartChipUseCase = new ConcreteCreateSmartChipUseCase.UseCase({
	outputPort: createSmartChipPresenter,
	smartChipRepository,
	smartChipValidationService,
	dtoLogger
});

await createSmartChipUseCase.Create({
	label: "rd",
	prefix: "RF",
	position: 1
});

await createSmartChipUseCase.Create({
	label: "Referência",
	prefix: "RF",
	position: 1
});
