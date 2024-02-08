import { CreateSmartChipUseCase, SmartChipValidationService } from "@/use-cases/smart-chip";
import { WebContextLogger } from "../infra/web-context-logger";
import { CreateSmartChipPresenter } from "@/interface-adapters/presenters/create-smart-chip-presenter";
import { SmartChipInMemoryRepository } from "@/interface-adapters/repositories/smart-chip-in-memory-repository";
import { WebIdGenerator } from "../infra";

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

createSmartChipUseCase.Create({
	label: "Referência",
	prefix: "RF",
	position: 1
});
