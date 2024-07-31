import { Injectable } from "@angular/core";
import { MutateDomainModel } from "../../model/domain/mutate.domain.model";
import { MutateDomainDTO } from "../../dto/domain/mutate.domain.dto";

@Injectable({
    providedIn: 'root'
  })
export class DomainMapperMutate {
    
  fromModelToDTO(domain: MutateDomainModel): MutateDomainDTO {
    return {
      id: domain.id,
      domain: domain.domain,
      branch: domain.branch,
      organizationId: domain.organizationId
    }
  } 
}