import { Injectable } from "@angular/core";
import { ApiClient } from "../../client/apiClient";
import { MutateDomainDTO } from "../../dto/domain/mutate.domain.dto";
import { Observable } from "rxjs";
import { ReadDomainDTO } from "../../dto/domain/read.domain.dto";
import { PaginationDTO } from "../../dto/pagination/read.pagination.dto";

const RESOURCE = `/domains`;

@Injectable({
    providedIn: 'root'
})

export class DomainService {
    constructor(private readonly client: ApiClient) {}
    
    post(domain: MutateDomainDTO): Observable<ReadDomainDTO> {
        return this.client.post(`${RESOURCE}`, domain)
    }

    update(domain: MutateDomainDTO): Observable<ReadDomainDTO> {
        return this.client.put(`${RESOURCE}/${domain.id}`, domain)
    }

    get(): Observable<PaginationDTO> {
        return this.client.get(`${RESOURCE}/allForUser?userId=0`);
    }

    delete(ids: Array<number>): Observable<void | null> {
        return this.client.delete(ids.length > 1 ? `${RESOURCE}?ids=${ids}` : `${RESOURCE}/${ids}`);
    }
}