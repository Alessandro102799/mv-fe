import { Injectable } from "@angular/core";
import { ApiClient } from "../../client/apiClient";
import { Observable } from "rxjs";
import { PaginationDTO } from "../../dto/pagination/read.pagination.dto";

const RESOURCE = `/subscribers`;

@Injectable({
    providedIn: 'root'
})

export class SubscriberService {
    constructor(private readonly client: ApiClient) {}

    get(): Observable<PaginationDTO> {
        return this.client.get(`${RESOURCE}`);
    }
}
