import { CannotFindDto, Result } from "@/shared";

export type IRemoveResponseResult = Result<
    string,
    CannotFindDto<"SMART_CHIP_NOT_FOUND"> |
    CannotFindDto<"GENERIC_SERVICE_ERROR">
>;

export interface IRemoveSmartChipUseCaseInputPort {
    Remove(id: string): Promise<void>;
}

export interface IRemoveSmartChipUseCaseOutputPort {
    RemoveResponse(result: IRemoveResponseResult): void;
}
