export interface MutateDomainDTO {
    readonly id?: number;
    readonly organizationId: number;
    readonly domain: string;
    readonly branch: boolean;
}