import { createAction, props } from "@ngrx/store";
import { ReadSubscriberModel } from "../../../../shared/model/subscriber/read.subscriber.model";

const ACTION_KEY = '[SUBSCRIBER]';

//GET SUBSCRIBERS
export const GetSubscribers = createAction(`${ACTION_KEY} Get Subscribers`);

export const GetSubscribersSuccess = createAction(`${ACTION_KEY} Get Subscribers Success`, props<{subscribers: ReadSubscriberModel[]}>());

export const GetSubscribersError = createAction(`${ACTION_KEY} Get Subscribers Error`, props<{message: string}>());