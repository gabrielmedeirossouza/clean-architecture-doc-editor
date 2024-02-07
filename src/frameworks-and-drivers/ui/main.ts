import { CreateSmartChipUseCase, SmartChipValidationService } from "@/use-cases/smart-chip";
import { WebContextLogger } from "../infra/web-context-logger";
import { CreateSmartChipPresenter } from "@/interface-adapters/presenters/create-smart-chip-presenter";

const logger = new WebContextLogger({});
const smartChipValidationService = new SmartChipValidationService({ logger });
const createSmartChipPresenter = new CreateSmartChipPresenter({});
const createSmartChipUseCase = new CreateSmartChipUseCase({
	outputPort: createSmartChipPresenter,
	smartChipValidationService,
	logger
});

createSmartChipUseCase.Create({
	name: "reference-giga-mega-ultra",
	label: "Referência",
	prefix: "RF",
	position: 1
});
