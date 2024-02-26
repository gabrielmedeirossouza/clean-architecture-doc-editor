<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ICreateSmartChipView } from "@/interface-adapters/protocols/views/smart-chip-view/create-smart-chip-view";
import { ISmartChipViewModel } from '@/interface-adapters/protocols/views/smart-chip-view/view-model';
import { WebConsoleLog } from '../infra/web-console-log';
import { SmartChipInMemoryRepository } from '@/interface-adapters/repositories/smart-chip-repository/smart-chip-in-memory-repository';
import { WebUuidGenerator } from '../infra/web-id-generator';
import { Logger } from '@/cross-cutting-concerns/logger';
import { SmartChipValidationService } from '@/use-cases/smart-chip/smart-chip-validation-service';
import { CreateSmartChipPresenter } from '@/interface-adapters/presenters/smart-chip-presenter/create-smart-chip-presenter';
import { CreateSmartChipUseCase } from '@/use-cases/smart-chip/create-smart-chip-use-case';

const createSmartChipDialog = ref(false);
const smartChipList = ref<ISmartChipViewModel[]>([]);

const form = reactive({
  label: {
    value: '',
    error: '',
  },
  prefix: {
    value: '',
    error: '',
  },
});

const view: ICreateSmartChipView = {
  RenderSuccess() {
    form.label.value = '';
    form.prefix.value = '';
    form.label.error = '';
    form.prefix.error = '';
  },
  RenderFieldError(field, message) {
    form[field].error = message;
  },
  RenderMessage(message) {
    console.log(message);
  },
};

const log = new WebConsoleLog();
const repository = new SmartChipInMemoryRepository(new WebUuidGenerator());
const validationService = new SmartChipValidationService(new Logger(log, "SmartChipValidationService"));
const presenter = new CreateSmartChipPresenter(view);
const useCase = new CreateSmartChipUseCase(presenter, validationService, repository, new Logger(log, "CreateSmartChipUseCase"));

</script>

<template>
<main>
    <button @click="createSmartChipDialog = !createSmartChipDialog">Smart Chip</button>

    <ul v-if="smartChipList.length">
        <li v-for="smartChip in smartChipList" :key="smartChip.id">
            <p>{{ smartChip.label }}</p>
            <p>{{ smartChip.prefix }}</p>
        </li>
    </ul>
</main>

<dialog v-if="createSmartChipDialog">
    <h2>Novo Smart Chip</h2>
    <form @submit.prevent="useCase.Create(form.label.value, form.prefix.value)">
        <div class="field-area">
            <input v-model="form.label.value" type="text" placeholder="Etiqueta" />
            <span>{{ form.label.error }}</span>
        </div>

        <div class="field-area">
            <input v-model="form.prefix.value" type="text" placeholder="Prefixo" />
            <span>{{ form.prefix.error }}</span>
        </div>

        <div>
            <button type="button" @click="createSmartChipDialog = false">Cancelar</button>
            <button type="submit">Criar</button>
        </div>
    </form>
</dialog>
</template>

<style scoped>
main {
    position: relative;
    width: 100%;
    padding: 24px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 24px;

        li {
            padding: 24px;
            border: 1px solid #ccc;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
    }
}

button {
  all: unset;
  cursor: pointer;
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  transition: all 200ms;

  &:hover {
    background-color: #45a049;
  }
}

input {
    width: 100%;
    padding: 12px 24px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 24px;
    background-color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    min-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        align-items: end;

        .field-area {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 4px;

            span {
                color: rgb(255, 68, 68);
                font-size: 12px;
            }
        }

        div {
            display: flex;
            gap: 12px;

            button {
                margin-top: 24px;
            }
        }

    }
}
</style>
