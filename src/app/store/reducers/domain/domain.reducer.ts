import { createReducer, on } from "@ngrx/store";
import { StateDomain, initialStateDoman } from "./domain.state";
import { GetDomainsSuccess } from "../../actions/domain/domain.action";

export const domainFeatureKey = 'domain';

export const reducerDomain = createReducer(
    initialStateDoman,
    
    on(
        GetDomainsSuccess,
        (state, payload): StateDomain =>  ({
            ...state,
            domains: payload.domains
        })
    )
)