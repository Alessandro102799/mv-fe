import { Injectable } from "@angular/core";
import { PaginationModel } from "../../model/pagination/read.pagination.model";
import { PaginationDTO } from "../../dto/pagination/read.pagination.dto";

@Injectable({
    providedIn: 'root'
  })
export class PaginationMapper {
    
    fromModelToDTO(pagination: PaginationModel): PaginationDTO {
        return {
            currentPage: pagination.currentPage,
            items: pagination.items,
            pageSize: pagination.pageSize,
            totalItems: pagination.totalItems
        }
      } 
    
    fromDTOToModel(pagination: PaginationDTO): PaginationModel {
        return {
            currentPage: pagination.currentPage,
            items: pagination.items,
            pageSize: pagination.pageSize,
            totalItems: pagination.totalItems
        }
    } 
}