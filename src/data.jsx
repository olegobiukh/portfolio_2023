import { Project } from "./types";

const gifNothing =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/nothing.gif";
const gifMiami =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/miami.gif";
const gifFE6 =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/fe6.gif";
const gifTodo =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/todo.gif";
const gifMarketplace =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/marketplace.gif";
const gifQuery =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/jquery.gif";
const gifDia =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/dia.gif";
const gifBarleyBrick =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/barley-brick.gif";
const gifNUsers =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/next-users.gif";
const gifFSMS =
  "https://raw.githubusercontent.com/olegobiukh/other/master/portfolio2023/fs-marketstore.gif";

export const data: Project[] = [
  {
    id: 3,
    title: "Nothing",
    demo: "https://olegobiukh.github.io/layout_landing-page/",
    gh: "https://github.com/olegobiukh/layout_landing-page",
    gif: gifNothing,
    skills: [
      {
        id: 0,
        color: "black",
        title: "HTML",
      },
      {
        id: 1,
        color: "red",
        title: "SCSS",
      },
    ],
  },
  {
    id: 8,
    title: "Users",
    demo: "https://next-users-bice.vercel.app/",
    gh: "https://github.com/olegobiukh/next-users",
    gif: gifNUsers,
    skills: [
      {
        id: 0,
        color: "blue",
        title: "Next",
      },
      {
        id: 1,
        color: "violet",
        title: "MySQL",
      },
    ],
  },
  {
    id: 9,
    title: "FS marketstore",
    demo: "",
    gh: "https://github.com/olegobiukh/fs-marketstore",
    gif: gifFSMS,
    skills: [
      {
        id: 0,
        color: "blue",
        title: "React",
      },
      {
        id: 1,
        color: "red",
        title: "Tailwind",
      },
    ],
  },
  {
    id: 2,
    title: "DIA",
    demo: "https://olegobiukh.github.io/layout_dia/",
    gh: "https://github.com/olegobiukh/layout_dia",
    gif: gifDia,
    skills: [
      {
        id: 0,
        color: "black",
        title: "HTML",
      },
      {
        id: 1,
        color: "red",
        title: "SCSS",
      },
    ],
  },
  {
    id: 0,
    title: "miami",
    demo: "https://olegobiukh.github.io/layout_miami/",
    gh: "https://github.com/olegobiukh/layout_miami",
    gif: gifMiami,
    skills: [
      {
        id: 0,
        color: "black",
        title: "HTML",
      },
      {
        id: 1,
        color: "red",
        title: "SCSS",
      },
    ],
  },
  {
    id: 1,
    title: "TODOS",
    demo: "https://olegobiukh.github.io/react-todo/",
    gh: "https://github.com/olegobiukh/react-todo",
    gif: gifTodo,
    skills: [
      {
        id: 0,
        color: "blue",
        title: "React",
      },
    ],
  },

  {
    id: 4,
    title: "MarketPlace",
    demo: "https://olegobiukh.github.io/ts-marketplace/",
    gh: "https://github.com/olegobiukh/ts-marketplace",
    gif: gifMarketplace,
    skills: [
      {
        id: 0,
        color: "red",
        title: "SCSS",
      },
      {
        id: 1,
        color: "blue",
        title: "React",
      },
    ],
  },
  {
    id: 5,
    title: "FE6",
    demo: "https://olegobiukh.github.io/fe6/",
    gh: "https://github.com/olegobiukh/fe6",
    gif: gifFE6,
    skills: [
      {
        id: 0,
        color: "black",
        title: "HTML",
      },
      {
        id: 1,
        color: "green",
        title: "GULP",
      },
    ],
  },
  {
    id: 6,
    title: "redux-barley-brick",
    demo: "https://olegobiukh.github.io/redux-barley-brick/",
    gh: "https://github.com/olegobiukh/redux-barley-brick",
    gif: gifBarleyBrick,
    skills: [
      {
        id: 0,
        color: "red",
        title: "SCSS",
      },
      {
        id: 1,
        color: "blue",
        title: "React",
      },
      {
        id: 2,
        color: "blue",
        title: "Redux",
      },
    ],
  },
  {
    id: 7,
    title: "Jquery animation",
    demo: "https://olegobiukh.github.io/jq-animation/",
    gh: "https://github.com/olegobiukh/jq-animation",
    gif: gifQuery,
    skills: [
      {
        id: 0,
        color: "blue",
        title: "JQUERY",
      },
    ],
  },
];
