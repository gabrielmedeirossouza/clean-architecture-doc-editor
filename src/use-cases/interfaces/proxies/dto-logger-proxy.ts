import { MessageDto } from "@/use-cases/interfaces/dtos";

export interface DtoLoggerProxy {
    readonly origin: string;
    ProxyInfo<T extends MessageDto<any>>(dto: T): T;
    ProxyError<T extends MessageDto<any>>(dto: T): T;
}
