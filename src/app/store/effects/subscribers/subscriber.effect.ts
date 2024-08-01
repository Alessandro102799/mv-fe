import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SnackbarService } from "../../../../shared/services/snackbar/snackbar.service";
import { GetSubscribers, GetSubscribersError, GetSubscribersSuccess } from "../../actions/subscribers/subscribers.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { PaginationDTO } from "../../../../shared/dto/pagination/read.pagination.dto";
import { HttpErrorResponse } from "@angular/common/http";
import { PaginationMapper } from "../../../../shared/mapper/pagination/read.pagination.mapper";
import { SubscriberMapperRead } from "../../../../shared/mapper/subscriber/read.subscriber.mapper";
import { SubscriberService } from "../../../../shared/services/subscriber/susbcriber.service";

@Injectable({
    providedIn: 'root'
})

export class SubscriberEffect {
    //INZIO GET
    getDomains$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetSubscribers),
            exhaustMap(() => 
            this.service.get().pipe(
                map((subscriber: PaginationDTO) => {
                    return GetSubscribersSuccess({subscribers: this.mapperPagination.fromDTOToModel(subscriber).items.map((item) => this.mapperRead.fromDTOToModel(item))})}),
                catchError((error: HttpErrorResponse) => of(GetSubscribersError({message: error.error.errorCode})))
            ))
        )
    })

    constructor(
        private readonly actions$: Actions,
        private readonly snackbar: SnackbarService,
        private readonly mapperPagination: PaginationMapper,
        private readonly mapperRead: SubscriberMapperRead,
        private readonly service: SubscriberService,
    ) {}
}