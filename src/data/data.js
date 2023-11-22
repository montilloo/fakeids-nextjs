import { whatWeOffer, productImgs } from "@/contains/fakeData";
import productVariantImg2 from "@/images/products/v2.jpg";
import productVariantImg3 from "@/images/products/v3.jpg";
import productVariantImg4 from "@/images/products/v4.jpg";
import productVariantImg5 from "@/images/products/v5.jpg";
import productVariantImg6 from "@/images/products/v6.jpg";
//
import productSport1 from "@/images/products/sport-1.png";
import productSport2 from "@/images/products/sport-2.png";
import productSport3 from "@/images/products/sport-3.png";
import productSport4 from "@/images/products/sport-4.png";
import productSport5 from "@/images/products/sport-5.png";
import productSport6 from "@/images/products/sport-6.png";
import productSport7 from "@/images/products/sport-7.png";
import productSport8 from "@/images/products/sport-8.png";

export const FAQS = [
  {
    id: 1,
    trigger: "Are these IDs Scannable?",
    content:
      "Yes they can be scanned and they will show all information that is on the card in the proper format.",
  },
  {
    id: 2,
    trigger: "Can I Purchase Only 1 ID ?",
    content:
      "We don’t sell only 1 id. The reason we provide two SAME IDs for each person is that if you lose one, you don’t have to pay for another.",
  },
  {
    id: 3,
    trigger: "How To Take a Good Photo?",
    content:
      "NO PASSPORT PHOTO\n" +
      "NO SELFIES PHOTO\n" +
      "NO SHADOWS ON FACE\n" +
      "HIGH-RESOLUTION PHOTO\n" +
      "WHITE OR LIGHT COLORED BACKGROUND\n" +
      "LOOKING DIRECTLY AT THE CAMERA\n",
  },
  {
    id: 4,
    trigger: "How do you ship the IDs?",
    content:
      "We have several different methods for shipping, including but not limited to: USPS, Fedex, UPS and DHL",
  },
  {
    id: 5,
    trigger: "I ordered my ID and sent my information in, now what?",
    content:
      "Now, you wait for us to get back to you and process your order. As soon as were done, we will ship it.",
  },
  {
    id: 6,
    trigger: "Black light and UV?",
    content:
      "Yes, all IDs come with UV ink on them, and will shine under a black light.",
  },
  {
    id: 7,
    trigger: "Can I Purchase Only 1 ID ?",
    content:
      "We don’t sell only 1 id. The reason we provide two SAME IDs for each person is that if you lose one, you don’t have to pay for another.",
  },
  {
    id: 8,
    trigger: "Is It Possible To Choose A Custom Address For My ID?",
    content:
      "We will choose the Id's address for customers. It is a real address, but a random one. If you want your own ID address, you can mention it in the extra info box.",
  },
  {
    id: 9,
    trigger: "I received my ID, what should I do now?",
    content: "Use it for whatever your heart desires.",
  },
];
export const FEEDBACKS = [
  {
    id: 1,
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
    content:
      "Thanks for such a fantastic service. The fake ID is of excellent quality, and I have used it a couple of times without any problems. I invested in a group discount, and even my friends were happy. I would repurchase it when I need another one. Even the response is fast via email. Can recommend USAFakeID at any time. ",
    username: "A happy customer",
    description: "Name not revealed for protection",
  },
  {
    id: 2,
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
    content:
      "Super friendly team that answered all my questions as I was concerned I would be wasting my money. The response is fast, and the ID cards look so real. Have used it a few times and have gotten in without any concerns. Super satisfied with the service. While I had to wait a bit longer, it was still worth the wait. ",
    username: "A happy customer",
    description: "Name not revealed for protection",
  },
  {
    id: 3,
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
    content:
      "Nice ID, guys, and very happy with the results. The cards even look better than the ones displayed on the site. It feels top-notch, and I have done the bend test and checked the security measures as it needs to be before using it. Thanks for the advice on how I should use my card as well. As it worked out fine when visiting a club in town. In honesty, I tried another vendor, but this one is the best you can buy online. ",
    username: "A happy customer",
    description: "Name not revealed for protection",
  },
];

const DEMO_VARIANTS = [
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "White",
    thumbnail: productVariantImg2,
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    thumbnail: productVariantImg3,
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    thumbnail: productVariantImg4,
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Natural",
    thumbnail: productVariantImg5,
    featuredImage: productImgs[4],
  },
];
const DEMO_VARIANT_COLORS = [
  {
    id: 1,
    name: "Violet",
    color: "bg-violet-400",
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "Yellow",
    color: "bg-yellow-400",
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    color: "bg-orange-400",
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    color: "bg-sky-400",
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-400",
    featuredImage: productImgs[4],
  },
];

export const OFFERS = [
  {
    id: 1,
    title: "We are 100% Safe & Secure",
    description:
      "Our customers are our priority, and your needs come first. We have developed an excellent reputation over the years. We are a fake ID provider who uses the latest technology with Polycarbonate & Teslin in our fake ID process and pioneers it.",
    image: whatWeOffer[0],
    tag: "Shop",
  },
  {
    id: 2,
    title: "Thorough Security Features",
    description:
      "We take all the necessary security measures to ensure that neither a bar nor bouncer will spot the difference. Our identification cards are the best in the fake business.",
    image: whatWeOffer[1],
    tag: "Inspiration",
  },
  {
    id: 3,
    title: "We Support All States",
    description:
      "With our years of experience with fake ID templates, our showcase of products presents updated fake IDs of almost every state. Additionally, the licenses we provide bypass the Bend, Barcode & Scan Test, UV Blacklight, and Hologram tests.",
    image: whatWeOffer[2],
    tag: "Sell",
  },
  {
    id: 4,
    title: "The Fastest Discrete Shipping",
    description:
      "There are no long waiting times or delays! USAFakeID knows how eager you are to get to that fun party. So we will never make you wait. We produce and ship your IDs as soon as they are ready with our streamlined process. So all you need to do is make payment and sit back as your ID should be there as quickly as possible.",
    image: whatWeOffer[3],
    tag: "Marketing",
  },
];
export const PRODUCTS = [
  {
    id: 1,
    name: "Rey Nylon Backpack",
    description: "Brown cockroach wings",
    price: 74,
    image: productImgs[16],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
    rating: "4.4",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: 'Round Buckle 1" Belt',
    description: "Classic green",
    price: 68,
    image: productImgs[1],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Waffle Knit Beanie",
    description: "New blue aqua",
    price: 132,
    image: productImgs[15],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["S", "M", "L", "XL"],
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Travel Pet Carrier",
    description: "Dark pink 2023",
    price: 28,
    image: productImgs[3],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Leather Gloves",
    description: "Perfect mint green",
    price: 42,
    image: productImgs[4],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Hoodie Sweatshirt",
    description: "New design 2023",
    price: 30,
    image: productImgs[5],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Wool Cashmere Jacket",
    description: "Matte black",
    price: 12,
    image: productImgs[8],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "Ella Leather Tote",
    description: "Cream pink",
    price: 145,
    image: productImgs[7],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];

export const SPORT_PRODUCTS = [
  {
    id: 1,
    name: "Mastermind Toys",
    description: "Brown cockroach wings",
    price: 74,
    image: productSport1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: "Jump Rope Kids",
    description: "Classic green",
    price: 68,
    image: productSport2,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Tee Ball Beanie",
    description: "New blue aqua",
    price: 132,
    image: productSport3,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/product-detail/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["S", "M", "L", "XL"],
    allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Rubber Table Tennis",
    description: "Dark pink 2023",
    price: 28,
    image: productSport4,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/product-detail/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Classic Blue Rugby",
    description: "Perfect mint green",
    price: 42,
    image: productSport5,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Manhattan Toy WRT",
    description: "New design 2023",
    price: 30,
    image: productSport6,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/product-detail/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Tabletop Football ",
    description: "Matte black",
    price: 12,
    image: productSport7,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/product-detail/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "Pvc Catching Toy",
    description: "Cream pink",
    price: 145,
    image: productSport8,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    sizes: ["XS", "S", "M", "L", "XL"],
    allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/product-detail/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];
