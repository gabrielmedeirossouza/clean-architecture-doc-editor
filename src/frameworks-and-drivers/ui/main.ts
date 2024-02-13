import { CreateSmartChipUseCase, SmartChipValidationService } from "@/use-cases/smart-chip";
import { WebContextLogger } from "../infra/web-context-logger";
import { CreateSmartChipPresenter } from "@/interface-adapters/presenters/smart-chip-presenter/create-smart-chip-presenter";
import { WebIdGenerator } from "../infra";
import { SmartChipInMemoryRepository } from "@/interface-adapters/repositories/smart-chip-repository";

const logger = new WebContextLogger({});
const smartChipValidationService = new SmartChipValidationService();
const createSmartChipPresenter = new CreateSmartChipPresenter({});
const smartChipRepository = new SmartChipInMemoryRepository({
	idGenerator: new WebIdGenerator()
});
const createSmartChipUseCase = new CreateSmartChipUseCase({
	outputPort: createSmartChipPresenter,
	smartChipRepository,
	smartChipValidationService,
	logger
});

await createSmartChipUseCase.Create({
	label: "Referência",
	prefix: "RF",
	position: 1
});

await createSmartChipUseCase.Create({
	label: "Referência",
	prefix: "RF",
	position: 1
});
