import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StateDomain } from "../../reducers/domain/domain.state";
import { domainFeatureKey } from "../../reducers/domain/domain.reducer";
import { ReadDomainModel } from "../../../../shared/model/domain/read.domain.model";

const selectStateDomain = createFeatureSelector<StateDomain>(domainFeatureKey);

//selettore per prendere tutti i domini esistenti
export const selectDomains = createSelector(selectStateDomain, (state: StateDomain): ReadDomainModel[] => state.domains);