import { Result } from "@/shared";
import { PersistedEntity, SmartChip } from "@/entities/interfaces";
import { RepositoryCannotFindDto } from "@/use-cases/interfaces/repository-dtos";

export namespace SmartChipRepository {
    export interface InputPort {
        Create(requestModel: CreateRequestModel): Promise<CreateResponseModel>;
        Edit(requestModel: EditRequestModel): Promise<EditResponseModel>;
        Remove(requestModel: RemoveRequestModel): Promise<RemoveResponseModel>;
        Get(requestModel: GetRequestModel): Promise<GetResponseModel>;
        List(): Promise<ListResponseModel>;
        FindByLabel(requestModel: FindByLabelRequestModel): Promise<FindByLabelResponseModel>;
        FindByPrefix(requestModel: FindByPrefixRequestModel): Promise<FindByPrefixResponseModel>;
    }

    export interface CreateRequestModel {
        smartChip: SmartChip;
    }

    export interface CreateResponseModel {
        response: Result<string, RepositoryCannotFindDto<Code.SMART_CHIP_NOT_FOUND>>;
    }

    export interface EditRequestModel {
        smartChip: PersistedEntity<SmartChip>;
    }

    export interface EditResponseModel {
        response: Result<string, RepositoryCannotFindDto<Code.SMART_CHIP_NOT_FOUND>>;
    }

    export interface RemoveRequestModel {
        id: string;
    }

    export interface RemoveResponseModel {
        response: Result<string, RepositoryCannotFindDto<Code.SMART_CHIP_NOT_FOUND>>;
    }

    export interface GetRequestModel {
        id: string;
    }

    export interface GetResponseModel {
        response: Result<PersistedEntity<SmartChip>, RepositoryCannotFindDto<Code.SMART_CHIP_NOT_FOUND>>;
    }

    export interface FindByLabelRequestModel {
        label: string;
    }

    export interface ListResponseModel {
        response: PersistedEntity<SmartChip>[];
    }

    export interface FindByLabelResponseModel {
        response: Result<PersistedEntity<SmartChip>, RepositoryCannotFindDto<Code.SMART_CHIP_NOT_FOUND>>;
    }

    export interface FindByPrefixRequestModel {
        prefix: string;
    }

    export interface FindByPrefixResponseModel {
        response: Result<PersistedEntity<SmartChip>, RepositoryCannotFindDto<Code.SMART_CHIP_NOT_FOUND>>;
    }

    export enum Code {
        SMART_CHIP_NOT_FOUND
    }
}
