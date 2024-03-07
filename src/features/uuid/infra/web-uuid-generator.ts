import { IUuidGenerator } from "@/features/uuid/protocols";

export class WebUuidGenerator implements IUuidGenerator {
    public GenerateUuidV4(): string {
        return crypto.randomUUID();
    }
}
