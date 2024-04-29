import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import Category from "../components/Category/Category";

const CategoryView = () => {
  const param = useParams();
  const [menItems, setMenItems] = useState();
  const [womenItems, setWomenItems] = useState();
  const [kidsItems, setKidsItems] = useState();
  const [loading, setLoading] = useState(true);

  const myAllItems = [
    {
      _id: "632f5e52c83f2f0015b0c7a1",
      name: "Gucci",
      category: "women",
      color: "red",
      type: "dress",
      description: "Silk floral-print midi dress",
      price: 2500,
      size: ["S", "M", "L"],
      highlights: ["floral-print", "silk fabric", "midi length"],
      image: [
        {
          fieldname: "images",
          originalname: "gucci-dress-1.jpg",
          encoding: "7bit",
          mimetype: "image/jpeg",
          destination: "./public/women",
          filename: "gucci-dress-1.jpg",
          path: "public/women/gucci-dress-1.jpg",
          size: 125642,
        },
        {
          fieldname: "images",
          originalname: "gucci-dress-2.jpg",
          encoding: "7bit",
          mimetype: "image/jpeg",
          destination: "./public/women",
          filename: "gucci-dress-2.jpg",
          path: "public/women/gucci-dress-2.jpg",
          size: 98451,
        },
      ],
      createdAt: "2023-11-21T10:45:18.302Z",
      updatedAt: "2023-11-21T10:45:18.302Z",
      __v: 0,
    },
    {
      _id: "632f5e65c83f2f0015b0c7a2",
      name: "Prada",
      category: "women",
      color: "black",
      type: "handbag",
      description: "Saffiano leather tote bag",
      price: 1800,
      size: [],
      highlights: ["saffiano leather", "gold-tone hardware"],
      image: [
        {
          fieldname: "images",
          originalname: "prada-handbag-1.jpg",
          encoding: "7bit",
          mimetype: "image/jpeg",
          destination: "./public/women",
          filename: "prada-handbag-1.jpg",
          path: "public/women/prada-handbag-1.jpg",
          size: 89632,
        },
      ],
      createdAt: "2023-11-21T10:46:13.579Z",
      updatedAt: "2023-11-21T10:46:13.579Z",
      __v: 0,
    },
    {
      _id: "632f5e73c83f2f0015b0c7a3",
      name: "Burberry",
      category: "men",
      color: "blue",
      type: "shirt",
      description: "Cotton Oxford shirt",
      price: 350,
      size: ["M", "L", "XL"],
      highlights: ["cotton fabric", "button-down collar"],
      image: [
        {
          fieldname: "images",
          originalname: "burberry-shirt-1.jpg",
          encoding: "7bit",
          mimetype: "image/jpeg",
          destination: "./public/men",
          filename: "burberry-shirt-1.jpg",
          path: "public/men/burberry-shirt-1.jpg",
          size: 74851,
        },
      ],
      createdAt: "2023-11-21T10:46:59.791Z",
      updatedAt: "2023-11-21T10:46:59.791Z",
      __v: 0,
    },
    {
      _id: "632f5e84c83f2f0015b0c7a4",
      name: "Louis Vuitton",
      category: "men",
      color: "brown",
      type: "wallet",
      description: "Monogram canvas bifold wallet",
      price: 800,
      size: [],
      highlights: ["monogram canvas", "bifold design"],
      image: [
        {
          fieldname: "images",
          originalname: "louis-vuitton-wallet-1.jpg",
          encoding: "7bit",
          mimetype: "image/jpeg",
          destination: "./public/men",
          filename: "louis-vuitton-wallet-1.jpg",
          path: "public/men/louis-vuitton-wallet-1.jpg",
          size: 62344,
        },
      ],
      createdAt: "2023-11-21T10:47:40.623Z",
      updatedAt: "2023-11-21T10:47:40.623Z",
      __v: 0,
    },
    {
      _id: "632f5e93c83f2f0015b0c7a5",
      name: "Rolex",
      category: "men",
      color: "silver",
      type: "watch",
      description: "Oyster Perpetual Datejust 41",
      price: 12000,
      size: [],
      highlights: ["stainless steel", "automatic movement"],
      image: [
        {
          fieldname: "images",
          originalname: "rolex-watch-1.jpg",
          encoding: "7bit",
          mimetype: "image/jpeg",
          destination: "./public/men",
          filename: "rolex-watch-1.jpg",
          path: "public/men/rolex-watch-1.jpg",
          size: 103422,
        },
      ],
      createdAt: "2023-11-21T10:48:35.245Z",
      updatedAt: "2023-11-21T10:48:35.245Z",
      __v: 0,
    },
    {
      _id: "632f5e9fc83f2f0015b0c7a6",
      name: "Nike",
      category: "women",
      color: "white",
      type: "sneakers",
      description: "Air Force 1 '07",
      price: 100,
      size: ["US 6", "US 7", "US 8"],
      highlights: ["leather upper", "perforations for enhanced ventilation"],
      image: [
        {
          fieldname: "images",
          originalname: "nike-sneakers-1.jpg",
          encoding: "7bit",
          mimetype: "image/jpeg",
          destination: "./public/women",
          filename: "nike-sneakers-1.jpg",
          path: "public/women/nike-sneakers-1.jpg",
          size: 84639,
        },
      ],
      createdAt: "2023-11-21T10:49:27.061Z",
      updatedAt: "2023-11-21T10:49:27.061Z",
      __v: 0,
    },
  ];

  useEffect(() => {
    axios
      .get("https://shema-backend.vercel.app/api/items")
      .then((res) => {
        console.log("res", res)
        setMenItems(res.data.filter((item) => item.category === "men"));
        setKidsItems(res.data.filter((item) => item.category === "kids"));
        setWomenItems(res.data.filter((item) => item.category === "women"));
        setLoading(false);
      })
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, [param.id]);

  return (
    <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
      {loading && (
        <ReactLoading
          type="balls"
          color="#FFE26E"
          height={100}
          width={100}
          className="m-auto"
        />
      )}
      {menItems && param.id === "men" && (
        <Category name="Men's Fashion" items={menItems} category="men" />
      )}
      {womenItems && param.id === "kids" && (
        <Category name="Kids Fashion" items={kidsItems} category="kids" />
      )}
      {kidsItems && param.id === "women" && (
        <Category name="Women's Fashion" items={womenItems} category="women" />
      )}
    </div>
  );
};

export default CategoryView;
