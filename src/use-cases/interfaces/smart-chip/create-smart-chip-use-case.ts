import { ISmartChip } from "@/entities/interfaces";
import { Result } from "@/shared/result";
import { IMessageDTO, INumberOutsideRangeErrorDTO, IStringTooLongErrorDTO, IStringTooShortErrorDTO } from "../dtos";

export interface ICreateSmartChipUseCaseRequestModel {
  name: string;
  label: string;
  prefix: string;
  position: number;
}

export interface ICreateSmartChipUseCaseInputPort {
  Create(requestModel: ICreateSmartChipUseCaseRequestModel): void;
}

export interface ICreateSmartChipUseCaseOutputPort {
  Response(responseModel: ICreateSmartChipUseCaseResponseModel): void;
  NameResponse(responseModel: ICreateSmartChipUseCaseNameResponseModel): void;
  LabelResponse(responseModel: ICreateSmartChipUseCaseLabelResponseModel): void;
  PrefixResponse(responseModel: ICreateSmartChipUseCasePrefixResponseModel): void;
  PositionResponse(responseModel: ICreateSmartChipUseCasePositionResponseModel): void;
}

export interface ICreateSmartChipUseCaseResponseModel {
  response: Result<ISmartChip, IMessageDTO>;
}

export interface ICreateSmartChipUseCaseNameResponseModel {
  response: Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
}

export interface ICreateSmartChipUseCaseLabelResponseModel {
  response: Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
}

export interface ICreateSmartChipUseCasePrefixResponseModel {
  response: Result<string, IStringTooShortErrorDTO | IStringTooLongErrorDTO>;
}

export interface ICreateSmartChipUseCasePositionResponseModel {
  response: Result<number, INumberOutsideRangeErrorDTO>;
}
