import { ISmartChipEntity } from "@/features/smart-chip/protocols";

export class SmartChipEntity implements ISmartChipEntity {
    constructor(
        public readonly label: string,
        public readonly prefix: string
    ) { }
}
