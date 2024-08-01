import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import {localStorageSync} from 'ngrx-store-localstorage';
import {Buffer} from 'buffer';
import { DomainEffect } from "./effects/domain/domain.effect";
import { domainFeatureKey, reducerDomain } from "./reducers/domain/domain.reducer";
import { StateDomain } from "./reducers/domain/domain.state";
import { SubscriberEffect } from "./effects/subscribers/subscriber.effect";

export const NGRX_EFFECTS = [
    DomainEffect,
    SubscriberEffect
]

export interface IAppState {
    router: RouterReducerState;
    [domainFeatureKey]: StateDomain;
}

export const reducers: ActionReducerMap<IAppState> = {
    router: routerReducer,
    [domainFeatureKey]: reducerDomain
}

/**
 * sync auth storage
 * @param reducer
 * @returns
 */
function localStorageSyncReducer(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
    return localStorageSync({
        keys: [
            {
                [domainFeatureKey]: {
                    encrypt: (state: string) => Buffer.from(state, 'latin1').toString('base64'),
                    decrypt: (state: string) => Buffer.from(state, 'base64').toString('latin1')
                }
            }
        ],
        rehydrate: true,
        removeOnUndefined: true,
        storage: sessionStorage,
        syncCondition: (state: IAppState) => state !== null
    })(reducer)
}

export const metaReducers: MetaReducer<IAppState>[] = [localStorageSyncReducer];