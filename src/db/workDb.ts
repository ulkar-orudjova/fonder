import belong from "../assets/images/belong-designs.webp";
import escapely from "../assets/images/escapely.img.webp";
import plyo from "../assets/images/plyo-img.webp";
import merecatch from "../assets/images/mere-catch.webp";
import guest from "../assets/images/guest-of.webp";
import crumbUndone from "../assets/images/crumb-undone.webp";
import gouda from "../assets/images/so-domn-gouda.webp";
import wyeast from "../assets/images/wyeast.webp";
import butcher from "../assets/images/butcher-bird.webp";
import goldbug from "../assets/images/gold-bug.webp";
import coffee from "../assets/images/servant-coffee.webp";
import larkspur from "../assets/images/larkspur.webp";
import films from "../assets/images/de-angeles-films.webp";
import optera from "../assets/images/optera.webp";
import sevenStones from "../assets/images/seven-stones.webp";
import secretStache from "../assets/images/secret-stache.webp";

export interface IWorkDb {
  id: number;
  title: string;
  text: string;
  img: string;
  category: WorkCategory;
}

export enum WorkCategory {
  BRAND = 'Brand',
  ECOMMERCE = 'Ecommerce',
  ILLUSTRATION = 'Illustration',
  MEDIA = 'Media',
  STRATEGY = 'Strategy',
  WEB = 'Web'
}

 const workDb: IWorkDb[] = [
  {
    id: 1,
    title: "Belong Designs",
    text: "Apparel for adventure everywhere",
    img: belong,
    category: WorkCategory.BRAND,
  },
  {
    id: 2,
    title: "Escapely",
    text: "Escape the expected",
    img: escapely,
    category: WorkCategory.MEDIA,
  },
  {
    id: 3,
    title: "Plyo",
    text: "Sports vitamins that keep up",
    img: plyo,
    category: WorkCategory.ECOMMERCE,
  },
  {
    id: 4,
    title: "MereCatch",
    text: "The future of fine footwear",
    img: merecatch,
    category:  WorkCategory.STRATEGY,
  },
  {
    id: 5,
    title: "Guest Of",
    text: "A platform for creators and brands",
    img: guest,
    category: WorkCategory.BRAND,
  },
  {
    id: 6,
    title: "Crumb Undone",
    text: "Treat yourself fearlessly",
    img: crumbUndone,
    category: WorkCategory.BRAND,
  },
  {
    id: 7,
    title: "So Damn Gouda",
    text: "Your gateway to upscale snacking",
    img: gouda,
    category:  WorkCategory.ECOMMERCE,
  },
  {
    id: 8,
    title: "Wyeast",
    text: "The lab behind best in craft brewing",
    img: wyeast,
    category:  WorkCategory.WEB,
  },
  {
    id: 9,
    title: "Butcher Bird",
    text: "Productions on the cunning edge",
    img: butcher,
    category:  WorkCategory.WEB,
  },
  {
    id: 10,
    title: "GoldBug",
    text: "Bringing a retail legacy to ecommerce",
    img: goldbug,
    category:  WorkCategory.ECOMMERCE,
  },
  {
    id: 11,
    title: "Servant Coffee",
    text: "Ecommerce for coffee crafted to serve",
    img: coffee,
    category:  WorkCategory.MEDIA,
  },
  {
    id: 12,
    title: "Larkspur Baby",
    text: "Growing up never looked this good",
    img: larkspur,
    category: WorkCategory.ILLUSTRATION,
  },
  {
    id: 13,
    title: "De Angeles Films",
    text: "Filmmaker forward productions",
    img: films,
    category: WorkCategory.WEB,
  },
  {
    id: 14,
    title: "Optera",
    text: "Climate data for business outcomes",
    img: optera,
    category:  WorkCategory.STRATEGY,
  },
  {
    id: 15,
    title: "Seven Stones",
    text: "A global collective of executive consultants",
    img: sevenStones,
    category:  WorkCategory.WEB,
  },
  {
    id: 16,
    title: "Secret Stache",
    text: "Your forever firm for web development",
    img: secretStache,
    category:  WorkCategory.ILLUSTRATION,
  },
];

export default workDb;
