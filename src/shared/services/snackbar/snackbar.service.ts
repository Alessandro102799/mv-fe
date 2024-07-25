import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig, MatSnackBarDismiss } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { SnackbarComponent } from "../../../uikit/snackbar/snackbar.component";

@Injectable({
    providedIn: 'root'
})
 export class SnackbarService {
  private configSuccess: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: ['success-snackbar'],
  };

  private configError: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: ['error-snackbar'],
  };

  constructor(private readonly snackbar: MatSnackBar) {}

  public errorSnackbar(message: string) {
    this.openCustomSnackBar(message, 'fa fa-exclamation-triangle', this.configError);
  }

  public successSnackbar(message: string) {
    this.openCustomSnackBar(message, 'fa fa-check', this.configSuccess)
  }

  openCustomSnackBar(message: string, icon: string, config: MatSnackBarConfig) {
    this.snackbar.openFromComponent(SnackbarComponent, {
      data: {
        message: message,
        icon: icon,
      },
      ...config
    });
  }
 }