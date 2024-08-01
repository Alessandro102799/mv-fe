import { ReadDomainModel } from "../domain/read.domain.model";

export interface PropertiesModel {
    readonly cfwdAfterSeconds: string;
    readonly cfwdAfterTimeout: number;
    readonly cfwdAfterTarget: string;
    readonly cfwdBusy: string;
    readonly cfwdBusyTarget: string;
    readonly cfwdUnconditional: string;
    readonly cfwdUnconditionalTarget: string;
    readonly cfwdUnavailable: string;
    readonly cfwdUnavailableTarget: string;
    readonly trunk2TrunkEnabled: boolean;
    readonly recordingEnabled: number;
    readonly sendFaxEnabled: boolean;
    readonly distinctiveRingtone: boolean;
    readonly cid: string;
    readonly pin: string;
    readonly isLocked: boolean;
}

export interface AliasesModel {
    readonly id?: number;
    readonly subscriberId?: number;
    readonly aliasUsername: string;
    readonly aliasDomain: string;
    readonly username: string;
    readonly domain: string;
}

export interface IntercomModel {
    readonly id?: number;
    readonly dst: number;
}

export interface ReadSubscriberModel {
    readonly id: number;
    readonly username: string;
    readonly devices: [];
    readonly domain: ReadDomainModel[];
    readonly password: string;
    readonly emailAddress: string;
    readonly displayLabel: string;
    readonly subscriberGroups: null;
    readonly voicemail: null; //per adesso poi da costruire dto e model;
    readonly properties: PropertiesModel | null;
    readonly dbAliases: []; //per adesso poi da costruire dto e model;
    readonly intercom: []; //per adesso poi da costruire dto e model;
    readonly blacklist: [];
    readonly cosTemplate: null //per adesso poi da costruire dto e model;
    readonly ucc: boolean;
}