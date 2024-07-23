import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CreateDomain, CreateDomainError, CreateDomainSuccess, GetDomains, GetDomainsError, GetDomainsSuccess } from "../../actions/domain/domain.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { DomainService } from "../../../../shared/services/domain/domain.service";
import { MutateDomainModel } from "../../../../shared/model/domain/mutate.domain.model";
import { HttpErrorResponse } from "@angular/common/http";
import { PaginationDTO } from "../../../../shared/dto/pagination/read.pagination.dto";
import { PaginationMapper } from "../../../../shared/mapper/pagination/read.pagination.mapper";
import { DomainMapper } from "../../../../shared/mapper/domain/read.domain.mapper";
import { Location } from '@angular/common';

import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { SnackbarService } from "../../../../shared/services/snackbar/snackbar.service";

@Injectable({
    providedIn: 'root'
})

export class DomainEffect {

    //create domain
    createDomain$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(CreateDomain),
            exhaustMap((action) => 
                this.service.post(action.domain).pipe(
                    map((domain: MutateDomainModel) => { return CreateDomainSuccess({domain})}),
                    catchError((error: HttpErrorResponse) => of(CreateDomainError({message: error.error.message})))
                )
            )
        )
    })

    //create domain success
    postDomainSuccess$ = createEffect(
        () => {
          return this.actions$.pipe(
            ofType(CreateDomainSuccess),
            map(() => {
                this.snackbar.successSnackbar('Successfully Created');
                this.location.back();
            })
          );
        },
        { dispatch: false }
    );

    //create domain success
    postDomainError$ = createEffect(
        () => {
            return this.actions$.pipe(
            ofType(CreateDomainError),
            map((action) => {
                this.snackbar.errorSnackbar(action.message);
                this.location.back();
            })
            );
        },
        { dispatch: false }
    );

    //get domains
    getDomains$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetDomains),
            exhaustMap(() => 
            this.service.get().pipe(
                map((domain: PaginationDTO) => {
                    return GetDomainsSuccess({domains: this.mapperPagination.fromDTOToModel(domain).items.map((item) => this.mapper.fromDTOToModel(item))})}),
                catchError((error: HttpErrorResponse) => of(GetDomainsError({message: error.error.errorCode})))
            ))
        )
    })
    

    constructor(
        private readonly actions$: Actions,
        private readonly service: DomainService,
        private readonly mapperPagination: PaginationMapper,
        private readonly mapper: DomainMapper,
        private readonly location: Location,
        private readonly snackbar: SnackbarService,
    ) {}
}