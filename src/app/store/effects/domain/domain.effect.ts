import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CreateDomain, CreateDomainError, CreateDomainSuccess, GetDomains, GetDomainsError, GetDomainsSuccess, DeleteDomain, DeleteDomainError, DeleteDomainSuccess, UpdateDomain, UpdateDomainSuccess, UpdateDomainError } from "../../actions/domain/domain.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { DomainService } from "../../../../shared/services/domain/domain.service";
import { MutateDomainModel } from "../../../../shared/model/domain/mutate.domain.model";
import { HttpErrorResponse } from "@angular/common/http";
import { PaginationDTO } from "../../../../shared/dto/pagination/read.pagination.dto";
import { PaginationMapper } from "../../../../shared/mapper/pagination/read.pagination.mapper";
import { DomainMapperRead } from "../../../../shared/mapper/domain/read.domain.mapper";
import { Location } from '@angular/common';
import { SnackbarService } from "../../../../shared/services/snackbar/snackbar.service";
import { errorCode } from "../../../../uikit/snackbar/errorCode";
import { DomainMapperMutate } from "../../../../shared/mapper/domain/mutate.domain.mapper";

@Injectable({
    providedIn: 'root'
})

export class DomainEffect {

//INIZIO CREATE
    createDomain$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CreateDomain),
            exhaustMap((action) => 
                this.service.post(this.mapperMutate.fromModelToDTO(action.domain)).pipe(
                    map((domain: MutateDomainModel) => { return CreateDomainSuccess({domain})}),
                    catchError((error: HttpErrorResponse) => of(CreateDomainError({message: errorCode.get(error.error.errorCode) as string})))
                )
            )
        )
    })

    postDomainSuccess$ = createEffect(
        () => {
          return this.actions$.pipe(
            ofType(CreateDomainSuccess),
            map(() => {
                this.snackbar.successSnackbar('Domain Successfully Created');
                this.location.back();
            })
          );
        },
        { dispatch: false }
    );

    postDomainError$ = createEffect(
        () => {
            return this.actions$.pipe(
            ofType(CreateDomainError),
            map((action) => {
                this.snackbar.errorSnackbar(action.message);
            })
            );
        },
        { dispatch: false }
    );
//FINE CREATE

//INIZIO UPDATE
    updateDomain$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UpdateDomain),
            exhaustMap((action) => 
                this.service.update(this.mapperMutate.fromModelToDTO(action.domain)).pipe(
                    map((domain: MutateDomainModel) => { return UpdateDomainSuccess({domain})}),
                    catchError((error: HttpErrorResponse) => of(UpdateDomainError({message: errorCode.get(error.error.errorCode) as string})))
                )
            )
        )
    })

    updateDomainSuccess$ = createEffect(
        () => {
        return this.actions$.pipe(
            ofType(UpdateDomainSuccess),
            map(() => {
                this.snackbar.successSnackbar('Domain Successfully Updated');
                this.location.back();
            })
        );
        },
        { dispatch: false }
    );

    updateDomainError$ = createEffect(
        () => {
            return this.actions$.pipe(
            ofType(UpdateDomainError),
            map((action) => {
                this.snackbar.errorSnackbar(action.message);
            })
            );
        },
        { dispatch: false }
    );
//FINE CREATE

//INZIO GET
    getDomains$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetDomains),
            exhaustMap(() => 
            this.service.get().pipe(
                map((domain: PaginationDTO) => {
                    return GetDomainsSuccess({domains: this.mapperPagination.fromDTOToModel(domain).items.map((item) => this.mapperRead.fromDTOToModel(item))})}),
                catchError((error: HttpErrorResponse) => of(GetDomainsError({message: error.error.errorCode})))
            ))
        )
    })
//FINE GET

//INIZIO DELETE
    deleteDomains$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(DeleteDomain),
            exhaustMap((action) => 
                this.service.delete(action.ids).pipe(
                    map(() => DeleteDomainSuccess()),
                    catchError((error: HttpErrorResponse) => of(DeleteDomainError({message: errorCode.get(error.error.errorCode) as string, ids: action.ids})))
                )
            )
        )
    })

    deleteDomainsSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(DeleteDomainSuccess),
            map(() => {
                this.snackbar.successSnackbar('Domain(s) Successfully Deleted')
                return GetDomains();
            })
        )
    })

    deleteDomainsError$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(DeleteDomainError),
            map((action) => {
                action.ids.length > 0 ?  this.snackbar.errorSnackbar('Domain(s) Error Deleted') : this.snackbar.warningSnackbar('Domain(s) Not Selected');
            })
        )
    }, {dispatch: false})
    
//FINE DELETE

    constructor(
        private readonly actions$: Actions,
        private readonly service: DomainService,
        private readonly mapperPagination: PaginationMapper,
        private readonly mapperRead: DomainMapperRead,
        private readonly mapperMutate: DomainMapperMutate,
        private readonly location: Location,
        private readonly snackbar: SnackbarService,
    ) {}
}