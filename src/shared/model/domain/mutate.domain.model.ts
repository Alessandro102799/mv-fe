export interface MutateDomainModel {
    readonly id?: number;
    readonly domain: string,
    readonly organizationId: number,
    readonly branch: boolean;
}