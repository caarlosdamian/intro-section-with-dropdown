import { Headers } from "../interfaces/interfaces";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import todo from "../images/icon-todo.svg"
import planning from '../images/icon-planning.svg'

export const dropDownHeaders: Headers[] = [
  {
    id: "d1",
    label: "Feature",
    top: "80px",
    left: "100px",
    height: "160px",
    width: "153px",
    dropbox:'FEATURE_OPEN',
    options: [
      {
        id: "dp1",
        name: "Todo List",
        icon: todo,
      },
      {
        id: "dp2",
        name: "Calendar",
        icon: calendar,
      },
      {
        id: "dp3",
        name: "Reminders",
        icon: reminders,
      },
      {
        id: "dp4",
        name: "Planning",
        icon: planning,
      },
    ],
  },
  {
    id: "d2",
    label: "Company",
    top: "80px",
    left: "280px",
    height: "128px",
    width: "116px",
    dropbox:'COMPANY_OPEN',
    options: [
      {
        id: "dp5",
        name: "History",
      },
      {
        id: "dp6",
        name: "Our Team",
      },
      {
        id: "dp7",
        name: "Blog",
      },
    ],
  },
];

export const headers: Headers[] = [
  {
    id: "h1",
    label: "Careers",
  },
  {
    id: "h2",
    label: "About",
  },
];
