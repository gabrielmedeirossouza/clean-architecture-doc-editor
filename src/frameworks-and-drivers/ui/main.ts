import { createApp } from 'vue';
import './style.css';
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { Logger } from '@/cross-cutting-concerns/logger';
import { WebUuidGenerator } from '@/frameworks-and-drivers/infra/web-id-generator';
import { Observable } from '@/shared';
import { WebConsoleLog } from '@/frameworks-and-drivers/infra/web-console-log';
import { SmartChipValidationService } from '@/use-cases/smart-chip/smart-chip-validation-service';
import { CreateSmartChipUseCase } from '@/use-cases/smart-chip/create-smart-chip-use-case';
import { SmartChipInMemoryRepository } from '@/interface-adapters/repositories/smart-chip-repository/smart-chip-in-memory-repository';
import { CreateSmartChipPresenter } from '@/interface-adapters/presenters/smart-chip-presenter';
import App from './App.vue';

const webConsoleLog = new WebConsoleLog();
const repository = new SmartChipInMemoryRepository(new WebUuidGenerator());
const presenter = new CreateSmartChipPresenter({ createResponse:  new Observable() });
const validationService = new SmartChipValidationService(new Logger(webConsoleLog, "SmartChipValidationService"));
const useCase = new CreateSmartChipUseCase(presenter, validationService, repository, new Logger(webConsoleLog, "CreateSmartChipUseCase"));

await useCase.Create('label', 'prefix');
await useCase.Create('label', 'prefix too long!!!!');

const vuetify = createVuetify({
	components,
	directives,
	theme: {
		defaultTheme: 'light',
	},
});

createApp(App).use(vuetify).mount('#app');
