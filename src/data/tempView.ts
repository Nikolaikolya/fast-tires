import { IMenuList } from "../types/types";

export const catalogDataView: IMenuList[] = [
  {
    id: 0,
    text: "Шины",
    link: "/tires",
  },
  {
    id: 1,
    text: "Диски",
    link: "/discs",
  },
  {
    id: 2,
    text: "Пункты выдачи",
    link: "/points",
  },
];

export const informationDataView: IMenuList[] = [
  {
    id: 0,
    text: "Оплата и доставка",
    link: "/delivery",
  },
  {
    id: 1,
    text: "Гарантия",
    link: "/garante",
  },
  {
    id: 2,
    text: "Акции",
    link: "/actions",
  },
  {
    id: 3,
    text: "Блог",
    link: "/blog",
  },
];

export const contactDataView: IMenuList[] = [
  {
    id: 0,
    text: "8 (800) 555-13-26",
    link: "+78005551326",
    type: "phone",
    icon: "phone",
  },
  {
    id: 1,
    text: "info@shiny-migom.ru",
    link: "info@shiny-migom.ru",
    type: "email",
    icon: "envelope",
  },
  {
    id: 2,
    text: "Мы в инстаграм",
    link: "https://www.instagram.com/",
    type: "link",
    icon: "instagram",
  },
];
