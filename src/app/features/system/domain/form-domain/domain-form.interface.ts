import { FormControl } from "@angular/forms";

export interface DomainForm {
    domain: FormControl<string>;
    organizationId: FormControl<number>;
    branch: FormControl<boolean>;
}