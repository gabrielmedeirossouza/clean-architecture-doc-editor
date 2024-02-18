<script setup lang="ts">
import { ref } from 'vue';

const createSmartChipDialog = ref(false);
</script>

<template>
    <main>
        <v-toolbar :elevation="8" title="Doc Editor">
            <v-btn variant="outlined">
            Smart Chip

            <v-menu activator="parent">
                <v-list>
                <v-list-item @click="createSmartChipDialog = true">
                    <v-list-item-title>Novo</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
            </v-btn>
        </v-toolbar>
    </main>

    <v-dialog
      v-model="createSmartChipDialog"
      persistent
      width="600"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Criar novo Smart Chip</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="8"
              >
                <v-text-field
                  label="Etiqueta"
                  required
                  validate-on="blur"
                  :error="true"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  label="Prefixo"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            variant="text"
            @click="createSmartChipDialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            variant="text"
            @click="createSmartChipDialog = false"
          >
            Criar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<style scoped>
main {
    width: 100%;
}
</style>
