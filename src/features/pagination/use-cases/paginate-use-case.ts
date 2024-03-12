import { ILogger } from "@/cross-cutting-concerns/protocols";
import { IPaginateUseCaseInputPort, IPaginateUseCaseOutputPort } from "@/features/pagination/protocols/paginate-use-case";
import { IPaginatedRepository } from "@/features/pagination/protocols";

export class PaginateUseCase implements IPaginateUseCaseInputPort {
    constructor(
        private readonly repository: IPaginatedRepository<any>,
        private readonly outputPort: IPaginateUseCaseOutputPort<any>,
        private readonly logger: ILogger
    ) {}

    public FirstPage(): void {
        const result = this.repository.FirstPage();

        if (!result.ok) {
            this.logger.Warn(result.value.message);

            return this.outputPort.PageResponse(result);
        }

        this.outputPort.PageResponse(result);
    }

    public LastPage(): void {
        const result = this.repository.LastPage();

        if (!result.ok) {
            this.logger.Warn(result.value.message);

            return this.outputPort.PageResponse(result);
        }

        this.outputPort.PageResponse(result);
    }

    public NextPage(): void {
        const result = this.repository.NextPage();

        if (!result.ok) {
            this.logger.Warn(result.value.message);

            return this.outputPort.PageResponse(result);
        }

        this.outputPort.PageResponse(result);
    }

    public PreviousPage(): void {
        const result = this.repository.PreviousPage();

        if (!result.ok) {
            this.logger.Warn(result.value.message);

            return this.outputPort.PageResponse(result);
        }

        this.outputPort.PageResponse(result);
    }

    public GoToPage(page: number): void {
        const result = this.repository.GoToPage(page);

        if (!result.ok) {
            this.logger.Warn(result.value.message);

            return this.outputPort.PageResponse(result);
        }

        this.outputPort.PageResponse(result);
    }
}
