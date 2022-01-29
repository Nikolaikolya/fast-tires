export type MenuIcons = "envelope" | "instagram" | "phone";
export type LinkType = "email" | "phone" | "link";

export interface IMenuList {
  id: number;
  text: string;
  link: string;
  icon?: MenuIcons;
  type?: LinkType;
}
