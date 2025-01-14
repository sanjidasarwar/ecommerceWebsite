import React, { useContext, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Title from "../components/Title";
import { ShopContext } from "../context/shopContext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const [showFiilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [catagory, setCatagory] = useState([]);
  const [subcatagory, setSubcatagory] = useState([]);

  const { products } = useContext(ShopContext);

  const toggleCatagory = (e) => {
    if (catagory.includes(e.target.value)) {
      setCatagory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCatagory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubcatagory = (e) => {
    if (subcatagory.includes(e.target.value)) {
      setSubcatagory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcatagory((prev) => [...prev, e.target.value]);
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFiilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <MdOutlineKeyboardArrowRight
            className={`sm:hidden ${showFiilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* Catagory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFiilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCatagory}
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCatagory}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCatagory}
              />{" "}
              kids
            </p>
          </div>
        </div>
        {/* Subcatagory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFiilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubcatagory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubcatagory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubcatagory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Collections"} />
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Filter Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
