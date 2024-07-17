import { IMenu } from "../../../shared/model/menu/menu.model";

//array di oggetti che permette di popolare il menu laterale della sidenav
export const navbarData: IMenu[] = [
    {
        routerLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard',
        expanded: false,
    },
    {
        routerLink: 'provisioning',
        icon: 'fal fa-suitcase',
        label: 'Provisioning',
        expanded: false,
        submenu: [
            {
                routerLink: 'provisioning',
                label: 'Provisioning'
            },
            {
                routerLink: 'Assets',
                label: 'Assets'
            }
        ]
    },
    {
        routerLink: 'subscribers',
        icon: 'fal fa-users',
        label: 'Subscribers',
        expanded: false,
        submenu: [
            {
                routerLink: 'subscribers',
                label: 'Subscribers'
            }
        ]
    },
    {
        routerLink: 'address-book',
        icon: 'fal fa-address-book',
        label: 'Address Book'
    },
    {
        routerLink: 'services',
        icon: 'fal fa-desktop',
        label: 'Services'
    },
    {
        routerLink: 'call-routing',
        icon: 'fal fa-arrows-alt',
        label: 'Call Routing'
    },
    {
        routerLink: 'authentication',
        icon: 'fal fa-id-card',
        label: 'Authentication'
    },
    {
        routerLink: 'system',
        icon: 'fal fa-cogs',
        label: 'System',
        submenu: [
            {
                routerLink: 'system/domain',
                label: 'Domains'
            }
        ]
    },
    {
        routerLink: 'info',
        icon: 'fal fa-info-circle',
        label: 'Info'
    }
]