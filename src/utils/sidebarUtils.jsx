import { IconDashboard, IconCalendar, IconTicket, IconReceipt } from "@tabler/icons-react";

const sidebarUtils = {
  commonSidebarItems: [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: <IconDashboard />,
    },
    {
      label: "Events",
      link: "/events",
      icon: <IconCalendar />,
    },
    {
      label: "Tickets",
      link: "/tickets",
      icon: <IconTicket />,
    }
  ],

  adminSidebarItems: () => {
    return [
      ...commonSidebarItems
    ]
  },

  customerSidebarItems: () => {
    return [
      ...commonSidebarItems,
      {
        label: "Bookings",
        link: "/bookings",
        icon: <IconReceipt />,
      }
    ]
  }
}

export default sidebarUtils;