import { Injectable } from "@angular/core";
import { ReadDomainModel } from "../../model/domain/read.domain.model";
import { ReadDomainDTO } from "../../dto/domain/read.domain.dto";

@Injectable({
    providedIn: 'root'
  })
export class DomainMapperRead {
    
  fromModelToDTO(domain: ReadDomainModel): ReadDomainDTO {
    return {
        id: domain.id,
        domain: domain.domain,
        attrs: domain.attrs,
        ldapUrl: domain.ldapUrl,
        ldapBasedn: domain.ldapBasedn,
        ldapIsad: domain.ldapIsad,
        ldapAttrMainsub: domain.ldapAttrMainsub,
        ldapAttrSecsub: domain.ldapAttrSecsub,
        ldapAttrProfile: domain.ldapAttrProfile,
        smtpRelayProto: domain.smtpRelayProto,
        smtpRelayHost: domain.smtpRelayHost,
        smtpRelayPort: domain.smtpRelayPort,
        smtpRelayFrom: domain.smtpRelayFrom,
        smtpRelayUser: domain.smtpRelayUser,
        smtpRelayPassword: domain.smtpRelayPassword,
        ldapEnable: domain.ldapEnable,
        smtpEnable: domain.smtpEnable,
        samlEnable: domain.samlEnable,
        samlUrl: domain.samlUrl,
        cdrRetention: domain.cdrRetention,
        organizationId: domain.organizationId,
        kamailioDomainId: domain.kamailioDomainId,
        smtpSecurity: domain.smtpSecurity,
        branch: domain.branch,
    }
  } 

  fromDTOToModel(domain: ReadDomainDTO): ReadDomainModel {
    return {
        id: domain.id,
        domain: domain.domain,
        attrs: domain.attrs,
        ldapUrl: domain.ldapUrl,
        ldapBasedn: domain.ldapBasedn,
        ldapIsad: domain.ldapIsad,
        ldapAttrMainsub: domain.ldapAttrMainsub,
        ldapAttrSecsub: domain.ldapAttrSecsub,
        ldapAttrProfile: domain.ldapAttrProfile,
        smtpRelayProto: domain.smtpRelayProto,
        smtpRelayHost: domain.smtpRelayHost,
        smtpRelayPort: domain.smtpRelayPort,
        smtpRelayFrom: domain.smtpRelayFrom,
        smtpRelayUser: domain.smtpRelayUser,
        smtpRelayPassword: domain.smtpRelayPassword,
        ldapEnable: domain.ldapEnable,
        smtpEnable: domain.smtpEnable,
        samlEnable: domain.samlEnable,
        samlUrl: domain.samlUrl,
        cdrRetention: domain.cdrRetention,
        organizationId: domain.organizationId,
        kamailioDomainId: domain.kamailioDomainId,
        smtpSecurity: domain.smtpSecurity,
        branch: domain.branch,
    }
  } 
}