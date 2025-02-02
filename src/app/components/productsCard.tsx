import { FC } from "react";

interface ProductProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard: FC<ProductProps> = ({ name, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-lg font-bold mt-4">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ProductCard;
