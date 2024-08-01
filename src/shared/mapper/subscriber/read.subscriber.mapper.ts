import { Injectable } from "@angular/core";
import { ReadSubscriberModel } from "../../model/subscriber/read.subscriber.model";
import { ReadSubscriberDTO } from "../../dto/subscriber/read.subscriber.dto";

@Injectable({
    providedIn: 'root'
  })
export class SubscriberMapperRead {

    fromModelToDTO(subscriber: ReadSubscriberModel): ReadSubscriberDTO {
        return {
            id: subscriber.id,
            username: subscriber.username,
            devices: subscriber.devices,
            domain: subscriber.domain,
            password: subscriber.password,
            emailAddress: subscriber.emailAddress,
            displayLabel: subscriber.displayLabel,
            subscriberGroups: subscriber.subscriberGroups,
            voicemail: subscriber.voicemail,
            properties: subscriber.properties,
            dbAliases: subscriber.dbAliases,
            intercom: subscriber.intercom,
            blacklist: subscriber.blacklist,
            cosTemplate: subscriber.cosTemplate,
            ucc: subscriber.ucc
        }
    }

    fromDTOToModel(subscriber: ReadSubscriberDTO): ReadSubscriberModel {
        return {
            id: subscriber.id,
            username: subscriber.username,
            devices: subscriber.devices,
            domain: subscriber.domain,
            password: subscriber.password,
            emailAddress: subscriber.emailAddress,
            displayLabel: subscriber.displayLabel,
            subscriberGroups: subscriber.subscriberGroups,
            voicemail: subscriber.voicemail,
            properties: subscriber.properties,
            dbAliases: subscriber.dbAliases,
            intercom: subscriber.intercom,
            blacklist: subscriber.blacklist,
            cosTemplate: subscriber.cosTemplate,
            ucc: subscriber.ucc
        }
    }
}