import { FormControl } from "@angular/forms";

export interface DomainForm {
    id?: FormControl<number>;
    domain: FormControl<string>;
    organizationId: FormControl<number>;
    branch: FormControl<boolean>;
}