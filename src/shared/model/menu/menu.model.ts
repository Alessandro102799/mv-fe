export interface MenuModel {
    routerLink: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    submenu?: MenuModel[]
}