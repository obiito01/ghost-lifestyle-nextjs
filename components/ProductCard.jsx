import React from "react";
import Link from "next/link";

const ProductCard = ({ id, name, description, image, price }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="w-full max-w-[500px] bg-white rounded-xl cursor-pointer shadow-md py-4 flex flex-col items-center justify-between">
        <h3 className="font-[500] text-center text-xs md:test-sm">Protein</h3>
        <div className="h-[85%] w-[85%] mb-2">
          <img
            src={image}
            alt="Product"
            className="w-full h-full object-contain block"
          />
        </div>
        <div className=" px-4">
          <span className="font-[500] text-xs md:text-sm block">{name}</span>
          <span className="font-[500] text-xs block">$ {price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
