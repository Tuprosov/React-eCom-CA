import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
function ProductCard({ id, image, title, rating, price, discountPrice }) {
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-xs">
        {/* Product Image */}
        <img
          src={image.url}
          alt={image.alt}
          className="w-full h-48 object-cover"
        />

        {/* Product Title */}
        <h3 className="mt-3 text-lg font-semibold">{title}</h3>

        {/* Rating */}
        <div className="flex items-center mt-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, index) =>
            index < rating ? (
              <FaStar key={index} />
            ) : (
              <FaRegStar key={index} className="text-gray-300" />
            )
          )}
        </div>

        {/* Price Section */}
        <div className="mt-2 text-lg font-semibold">
          {discountPrice > 0 ? (
            <div className="flex items-center gap-2">
              <span className="text-red-500">${discountPrice.toFixed(2)}</span>
              <span className="text-gray-400 line-through">
                ${price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span>${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
