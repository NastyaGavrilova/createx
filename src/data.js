import blogItem1 from "./assets/blog-item1.png";
import blogItem2 from "./assets/blog-item2.png";
import blogItem3 from "./assets/blog-item3.png";
import blogItem4 from "./assets/blog-item4.png";
import blogItem5 from "./assets/blog-item5.png";
import blogItem6 from "./assets/blog-item6.jpg";
import blogItem7 from "./assets/blog-item7.jpg";
const DATA = [
  {
    id: 1,
    category: "Fashion",
    datetime: "August 24, 2020",
    image: blogItem1,
    changed: false,
    comments: "No comments",
    title: "Bag Trends for Summer 2020",
    descr:
      "Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit viverra amet,malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod...",
  },
  {
    id: 2,
    category: "Celebrity style",
    datetime: "August 5, 2020",
    image: blogItem2,
    changed: false,
    comments: "No comments",
    title: "Wardrobe Essentials Everyone Should Own Today",
    descr:
      "Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit. Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac...",
  },
  {
    id: 3,
    category: "LifeStyle",
    changed: false,
    datetime: "July 16, 2020",
    image: blogItem3,
    comments: "4 comments",
    title: "Top 10 of This Season’s Hottest Sneakers",
    descr:
      "Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim. Turpis viverra mattis semper pellentesque facilisis. Ut id eget sagittis lectus...",
  },
  {
    id: 4,
    category: "Fashion",
    changed: false,
    datetime: "July 2, 2020",
    image: blogItem4,
    comments: "2 comments",
    title: "Modern Accessories 2020: Why Simple Isn't Easy",
    descr:
      "Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac. Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim...",
  },
  {
    id: 5,
    category: "Designers",
    changed: false,
    datetime: "July 28, 2020",
    image: blogItem5,
    comments: "No comments",
    title: "Fashion Design Sketches by World’s Top Fashion Designers",
    descr:
      "Hey gorgeous! Whether you’re a fashion design student, an established designer or just a fashion enthusiast, it’s always inspiring to see the work of some of the most iconic designers and ateliers in the world... ",
  },
  {
    id: 6,
    category: "Designers",
    changed: false,
    datetime: "Augest 09, 2020",
    image: blogItem6,
    comments: "2 comments",
    title: "One to Watch: Fashion Designer Ramadhan Mohamed",
    descr:
      "Ramadhan “Rammy” Mohamed developed her love for fashion at a young age. While she always considered design a potential career, her family had other plans for her. Mohamed, an Oromo refugee from East Africa... ",
  },
  {
    id: 7,
    category: "Designers",
    changed: false,
    datetime: "September 21, 2020",
    image: blogItem7,
    comments: "No comments",
    title:
      "Fashion designers create original clothing, accessories, and footwear",
    descr:
      "Fashion designers create original clothing, accessories, and footwear. They sketch designs, select fabrics, and patterns, and give instructions on how to make the products they design... ",
  },
  {
    id: 8,
    category: "Designers",
    changed: false,
    datetime: "December 07, 2020",
    image: blogItem7,
    comments: "No comments",
    title:
      "Fashion designers create original clothing, accessories, and footwear",
    descr:
      "Fashion designers create original clothing, accessories, and footwear. They sketch designs, select fabrics, and patterns, and give instructions on how to make the products they design... ",
  },
  {
    id: 9,
    category: "Designers",
    changed: false,
    datetime: "December 29, 2020",
    image: blogItem7,
    comments: "3 comments",
    title:
      "Fashion designers create original clothing, accessories, and footwear",
    descr:
      "Fashion designers create original clothing, accessories, and footwear. They sketch designs, select fabrics, and patterns, and give instructions on how to make the products they design... ",
  },
  {
    id: 10,
    category: "Designers",
    changed: false,
    datetime: "Febraury 3, 2021",
    image: blogItem7,
    comments: "1 comments",
    title:
      "Fashion designers create original clothing, accessories, and footwear",
    descr:
      "Fashion designers create original clothing, accessories, and footwear. They sketch designs, select fabrics, and patterns, and give instructions on how to make the products they design... ",
  },
  {
    id: 11,
    category: "Designers",
    changed: false,
    datetime: "March 15, 2021",
    image: blogItem7,
    comments: "No comments",
    title:
      "Fashion designers create original clothing, accessories, and footwear",
    descr:
      "Fashion designers create original clothing, accessories, and footwear. They sketch designs, select fabrics, and patterns, and give instructions on how to make the products they design... ",
  },
  {
    id: 12,
    category: "LifeStyle",
    changed: false,
    datetime: "Augest 23, 2020",
    image: blogItem3,
    comments: "2 comments",
    title: "Top 10 of This Season’s Hottest Sneakers",
    descr:
      "Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim. Turpis viverra mattis semper pellentesque facilisis. Ut id eget sagittis lectus...",
  },
  {
    id: 13,
    category: "LifeStyle",
    changed: false,
    datetime: "November 06, 2020",
    image: blogItem3,
    comments: "No comments",
    title: "Top 10 of This Season’s Hottest Sneakers",
    descr:
      "Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim. Turpis viverra mattis semper pellentesque facilisis. Ut id eget sagittis lectus...",
  },
  {
    id: 14,
    category: "LifeStyle",
    changed: false,
    datetime: "March 19, 2021",
    image: blogItem3,
    comments: "1 comments",
    title: "Top 10 of This Season’s Hottest Sneakers",
    descr:
      "Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim. Turpis viverra mattis semper pellentesque facilisis. Ut id eget sagittis lectus...",
  },
  {
    id: 15,
    category: "Fashion",
    changed: false,
    datetime: "April 02, 2021",
    image: blogItem4,
    comments: "1 comments",
    title: "Modern Accessories 2020: Why Simple Isn't Easy",
    descr:
      "Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac. Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim...",
  },
  {
    id: 16,
    category: "Fashion",
    changed: false,
    datetime: "April 02, 2021",
    image: blogItem4,
    comments: "1 comments",
    title: "Modern Accessories 2020: Why Simple Isn't Easy",
    descr:
      "Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac. Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper faucibus quisque massa ut enim...",
  },
];
// .map((n, i) => ({ ...n, id: i + 1 }))
export default DATA;
