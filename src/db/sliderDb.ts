import belong from "../assets/images/slider/slider-belong.webp";
import coors from "../assets/images/slider/slider-coors.webp";
import escapely from "../assets/images/slider/slider-escapely.webp";
import ricoh from "../assets/images/slider/slider-ricoh.webp";
import plyo from "../assets/images/slider/slider-plyo.webp";
import goldbug from "../assets/images/slider/slider-goldbug.webp";
import merecatch from "../assets/images/slider/slider-merecatch.webp";
import optera from "../assets/images/slider/slider-optera.webp";
import larkspur from "../assets/images/slider/slider-larkspur.webp";
import contactImg from "../assets/images/contact-img.webp";
import contactImg2 from "../assets/images/contact-img2.webp";
import contactImg3 from "../assets/images/contact-img3.webp";

interface ISliderData {
  id: number;
  image: string;
}

export const sliderData: ISliderData[] = [
  {
    id: 1,
    image: coors,
  },
  {
    id: 2,
    image: escapely,
  },
  {
    id: 3,
    image: ricoh,
  },
  {
    id: 4,
    image: plyo,
  },
  {
    id: 5,
    image: goldbug,
  },
  {
    id: 6,
    image: belong,
  },
  {
    id: 7,
    image: merecatch,
  },
  {
    id: 8,
    image: optera,
  },
  {
    id: 9,
    image: larkspur,
  },
];

interface IcontactListDb {
  id: number;
  img: string;
  name: string;
  title: string;
}

export const contactListDb: IcontactListDb[] = [
  {
    id: 1,
    img: contactImg,
    name: "Los Angeles",
    title: "California",
  },
  {
    id: 2,
    img: contactImg2,
    name: "Salt Lake City",
    title: "Utah",
  },
  {
    id: 3,
    img: contactImg3,
    name: "Denver",
    title: "Colorado",
  },
];
