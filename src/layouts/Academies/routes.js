import AcademiesOverview from "views/AcademiesOverview";
import AcademiesPlayersList from "views/AcademiesPlayersList";
import AcademiesPlayerDetails from "views/AcademiesPlayerDetails";

export default [
  {
    path: "/overview",
    name: "Overview",
    component: AcademiesOverview,
    layout: "/academies",
  },
  {
    name: "Players",
    collapse: true,
    views: [
      {
        path: "/players/list",
        layout: "/academies",
        component: AcademiesPlayersList,
      },
      {
        path: "/players/list/select",
        layout: "/academies",
        component: AcademiesPlayerDetails,
      },
    ],
  },
];
