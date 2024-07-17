export interface IMenu {
    routerLink: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    submenu?: IMenu[]
}