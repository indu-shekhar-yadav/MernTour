import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Taj Mahal",
    city: "Agra",
    address: "Dharmapuri, Agra, Uttar Pradesh, India",
    distance: 250,
    price: 1500,
    maxGroupSize: 10,
    desc: "A symbol of love and one of the Seven Wonders of the World.",
    reviews: [
      {
        name: "Rahul Sharma",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Goa Beaches",
    city: "Goa",
    address: "Goa, India",
    distance: 600,
    price: 2000,
    maxGroupSize: 8,
    desc: "Experience the sun, sand, and vibrant nightlife.",
    reviews: [
      {
        name: "Priya Patel",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Himalayan Peaks",
    city: "Manali",
    address: "Manali, Himachal Pradesh, India",
    distance: 800,
    price: 3000,
    maxGroupSize: 8,
    desc: "Breathtaking views and adventure await in the Himalayas.",
    reviews: [
      {
        name: "Vikram Singh",
        rating: 4.6,
      },
      {
        name: "Ramesh Kumar",
        rating: 4.9,
      },
      {
        name: "Rakesh Kumar",
        rating: 4.9,
      },
    ],
    avgRating: 4.7,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Jaipur Palace",
    city: "Jaipur",
    address: "Jaipur, Rajasthan, India",
    distance: 400,
    price: 1800,
    maxGroupSize: 8,
    desc: "Explore the royal heritage of the Pink City.",
    reviews:[],
    avgRating: 4.6,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Kerala Backwaters",
    city: "Kochi",
    address: "Kochi, Kerala, India",
    distance: 700,
    price: 2500,
    maxGroupSize: 8,
    desc: "Relax in the serene backwaters of God's Own Country.",
    reviews: [
      {
        name: "Rajesh Kumar",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Golden Temple",
    city: "Amritsar",
    address: "Amritsar, Punjab, India",
    distance: 300,
    price: 2200,
    maxGroupSize: 8,
    desc: "A spiritual and cultural marvel in the heart of Punjab.",
    reviews: [
      {
        name: "Simran Kaur",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Gir National Park",
    city: "Junagadh",
    address: "Junagadh, Gujarat, India",
    distance: 900,
    price: 3500,
    maxGroupSize: 8,
    desc: "Witness the majestic Asiatic lions in their natural habitat.",
    reviews: [
      {
        name: "Aditya Patel",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Varanasi Ghats",
    city: "Varanasi",
    address: "Varanasi, Uttar Pradesh, India",
    distance: 350,
    price: 1600,
    maxGroupSize: 8,
    desc: "Experience the spiritual essence along the Ganges River.",
    reviews: [
      {
        name: "Neha Verma",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
