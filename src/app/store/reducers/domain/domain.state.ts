import { ReadDomainModel } from "../../../../shared/model/domain/read.domain.model";

export interface StateDomain {
    readonly domains: ReadDomainModel[]
}

export const initialStateDoman: StateDomain = {
    domains : []
}