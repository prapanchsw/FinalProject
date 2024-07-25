import React from 'react'
import { AccountBalance, AdminPanelSettings, Bathroom, ExpandCircleDown, Home, Mail, ManageAccountsOutlined, Person2, Person2Outlined, PersonPinCircleOutlined } from '@mui/icons-material';

export const Sidebaruser = [
  
    {
        title: "Profile",
        icon: <Person2Outlined />,
        link:"/userprofile"
    },
    {
        title: "Add Income",
        icon: <ManageAccountsOutlined />,
        link: "/addincome"
        
    },
    {
        title: "Expense",
        icon: <AccountBalance />,
        link:"/showexpense"
},
]


