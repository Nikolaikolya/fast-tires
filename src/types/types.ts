export type MenuIcons = "envelope" | "instagram" | "phone";
export type LinkType = "email" | "phone" | "link";

export interface IMenuList {
  id: number;
  text: string;
  link: string;
  icon?: MenuIcons;
  type?: LinkType;
}

export interface IProduct {
  id: number;
  count: number;
  rating: number;
  title: string;
  old_price: number;
  now_price: number;
  sale: boolean;
}
