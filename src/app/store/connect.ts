import { RouterReducerState, routerReducer } from "@ngrx/router-store";
import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import {localStorageSync} from 'ngrx-store-localstorage';
import {Buffer} from 'buffer';

export const NGRX_EFFECTS = [
]

export interface IAppState {
    router: RouterReducerState;
}

export const reducers: ActionReducerMap<IAppState> = {
    router: routerReducer,
}

/**
 * sync auth storage
 * @param reducer
 * @returns
 */
function localStorageSyncReducer(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
    return localStorageSync({
        keys: [
        ],
        rehydrate: true,
        removeOnUndefined: true,
        storage: sessionStorage,
        syncCondition: (state: IAppState) => state !== null
    })(reducer)
}

export const metaReducers: MetaReducer<IAppState>[] = [localStorageSyncReducer];