// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
} from "react-icons/io";

// import images
import Features1Img from "./assets/img/features-1.png";
import Features2Img from "./assets/img/features-2.png";
import ChairImg from "./assets/img/chair.png";
import BedImg from "./assets/img/bed.png";
import CupboardImg from "./assets/img/cupboard.png";
import LightingImg from "./assets/img/lighting.png";
import Product1Img from "./assets/img/products/product-1.png";
import Product2Img from "./assets/img/products/product-2.png";
import Product3Img from "./assets/img/products/product-3.png";
import Product4Img from "./assets/img/products/product-4.png";
import Product5Img from "./assets/img/products/product-5.png";
import Product6Img from "./assets/img/products/product-6.png";
import Product7Img from "./assets/img/products/product-7.png";
import Product8Img from "./assets/img/products/product-8.png";
import Product9Img from "./assets/img/products/product-9.png";
import Product10Img from "./assets/img/products/product-10.png";
import TestimonialImg from "./assets/img/testimonial.png";
import Avatar1Img from "./assets/img/avatar-1.png";
import Avatar2Img from "./assets/img/avatar-2.png";
import Avatar3Img from "./assets/img/avatar-3.png";
import Avatar4Img from "./assets/img/avatar-4.png";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "features",
    href: "features",
  },
  {
    name: "contact",
    href: "contact",
  },
];

export const hero = {
  title: "A Journey to Inspired Living Starts Here",
  subtitle:
    "Start your journey towards inspired living today. Where Imagination and Reality Fuse to Redefine Your Home.",
  buttonText: "Shop Now",
};

export const stats = [
  {
    value: "7",
    text: "Year Experience",
  },
  {
    value: "2",
    text: "Opened in the country",
  },
  {
    value: "10k+",
    text: "Furniture sold",
  },
  {
    value: "260+",
    text: "Variant Furniture",
  },
];

export const features = {
  image: <Features1Img />,
  title: "We Create your home more aesthetic",
  subtitle:
    "Furniture power is a software as services for multipurpose business management system",
  buttonText: "Shop Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Valuation Services",
      subtitle:
        "Providing a precise estimation of the potential worth of your home design investments",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Development of Furniture Models",
      subtitle:
        "Combining artistic vision, ergonomic considerations, and material exploration to bring innovative and practical furniture designs to life",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "The Best Furniture Manufacturer of your choice",
    subtitle:
      "Discover the epitome of craftsmanship and design with our chosen Best Furniture Manufacturer. Elevate your living spaces with furniture that reflects unparalleled expertise and a dedication to excellence.",
  },
};

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: "chair",
      image: <ChairImg />,
    },
    {
      name: "bed",
      image: <BedImg />,
    },
    {
      name: "cupboard",
      image: <CupboardImg />,
    },
    {
      name: "lighting",
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: "All Products",
  subtitle:
    "Our exclusive service offers you a curated selection of products that are sourced from the finest offerings worldwide.",
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Summer Air",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wooden Style",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Little Modern",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Nordic chair",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Rocking star",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Abell 70",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "Vintage stool",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "White Night Table",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "White knight",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Bamboo Black",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: "Ceiling Light",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: "Wood Chair",
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: "Treos Seroes 911",
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: "Multi bilderman slibber",
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: "XORA corner desk",
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: "Black Forest Series Wood",
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: "Papper Cupboard",
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: "Ole Gundorse Spring",
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: "What people are saying about us",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "Josh Smith",
      occupation: "Manager of The New York Times",
      message:
        "“The Coffee Table is the centerpiece of my living room. Its rustic yet modern design effortlessly ties the room together.”",
    },
    {
      avatar: <Avatar2Img />,
      name: "Brandi Johns",
      occupation: "Manager of The New York Times",
      message:
        "“The comfort level is off the charts, and the sleek design adds a touch of elegance to my living room.”",
    },
    {
      avatar: <Avatar3Img />,
      name: "Paula Pfeffer",
      occupation: "Manager of The New York Times",
      message:
        "“The Dining Set allows me to easily adjust the table size, making it perfect for intimate dinners or larger gatherings.”",
    },
  ],
};

export const newsletter = {
  title: "Get more discount Off your order",
  subtitle: "Join our mailing list",
  placeholder: "Your email address",
  buttonText: "Subscribe",
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: "#",
    },
    {
      icon: <IoLogoInstagram />,
      href: "#",
    },
    {
      icon: <IoLogoGithub />,
      href: "#",
    },
    {
      icon: <IoLogoFacebook />,
      href: "#",
    },
  ],
  copyright: "Le Confortable",
};
