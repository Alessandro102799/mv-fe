import { createAction, props } from "@ngrx/store";
import { MutateDomainModel } from "../../../../shared/model/domain/mutate.domain.model";
import { ReadDomainModel } from "../../../../shared/model/domain/read.domain.model";

const ACTION_KEY = '[DOMAIN]';

//CREATE DOMAIN
export const CreateDomain = createAction(`${ACTION_KEY} Create Domain`, props<{domain: MutateDomainModel}>());

export const CreateDomainSuccess = createAction(`${ACTION_KEY} Create Domain Success`, props<{domain: MutateDomainModel}>());

export const CreateDomainError = createAction(`${ACTION_KEY} Create Domain Error`, props<{message: string}>());

//GET DOMAINS
export const GetDomains = createAction(`${ACTION_KEY} Get Domains`);

export const GetDomainsSuccess = createAction(`${ACTION_KEY} Get Domains Success`, props<{domains: ReadDomainModel[]}>());

export const GetDomainsError = createAction(`${ACTION_KEY} Get Domains Error`, props<{message: string}>());