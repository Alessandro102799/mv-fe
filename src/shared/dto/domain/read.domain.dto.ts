export interface ReadDomainDTO {
    readonly id: number;
    readonly domain: string;
    readonly attrs: string;
    readonly ldapUrl: string;
    readonly ldapBasedn: string;
    readonly ldapIsad: boolean;
    readonly ldapAttrMainsub: string;
    readonly ldapAttrSecsub: string;
    readonly ldapAttrProfile: string;
    readonly smtpRelayProto: string;
    readonly smtpRelayHost: string;
    readonly smtpRelayPort: string;
    readonly smtpRelayFrom: string;
    readonly smtpRelayUser: string;
    readonly smtpRelayPassword: string;
    readonly ldapEnable: boolean;
    readonly smtpEnable: boolean;
    readonly samlEnable: boolean;
    readonly samlUrl: string;
    readonly cdrRetention: number;
    readonly organizationId: number;
    readonly kamailioDomainId: number;
    readonly smtpSecurity: string;
    readonly branch: boolean;
}