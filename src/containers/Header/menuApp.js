export const adminMenu = [
    { //user manage
        name: 'menu.admin.manage-user', 
        menus: [
            {name: 'menu.admin.crud', link: '/system/user-manage'},
            {name: 'menu.admin.crud-redux', link: '/system/user-redux'},

            {name: 'menu.admin.manage-doctor', link: '/system/manage-doctor'},
            { //Manage doctor's schedule
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            },
        ]
    },
    { //clinic manage
        name: 'menu.admin.clinic', 
        menus: [
            {name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'}
        ]
    },
    { //specialty manage
        name: 'menu.admin.specialty', 
        menus: [
            {name: 'menu.admin.manage-specialty', link: '/system/manage-specialty'}
        ]
    },
    { //handbook manage
        name: 'menu.admin.handbook', 
        menus: [
            {name: 'menu.admin.manage-handbook', link: '/system/manage-handbook'}
        ]
    },
];

export const doctorMenu = [
    {
        name: 'menu.admin.manage-user',
        menus: [

            { //Manage doctor's schedule
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule'
            },
        ]
    }
];