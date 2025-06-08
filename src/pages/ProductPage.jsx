import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "../js/api/api";
import { API_BASE } from "../js/constants";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../js/store/cartSlice";

function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      i < rating ? (
        <FaStar key={i} className="text-yellow-400" />
      ) : (
        <FaRegStar key={i} className="text-gray-300" />
      )
    ); // Filled and empty stars
  }
  return <div className="flex">{stars}</div>;
}

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const api = new API(`${API_BASE}`);
      try {
        const data = await api.getProductById(id);
        setProduct(data.data);
      } catch (err) {
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p>Product not found</p>;

  const discount = product.price - product.discountedPrice;
  const discountPercentage = ((discount / product.price) * 100).toFixed(0);
  const images = Array.isArray(product.image)
    ? product.image
    : product.image
    ? [{ url: product.image.url, alt: product.image.alt }]
    : [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        navigation
        className="w-full max-w-md mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.url}
              alt={`${image.alt} image ${index + 1}`}
              className="w-full h-80 object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <div className="text-xl font-semibold">
        {discount > 0 ? (
          <div className="flex items-center justify-center gap-2">
            <span className="text-red-500">{discountPercentage}% OFF</span>
            <span className="line-through text-gray-500">${product.price}</span>
            <span className="text-green-600">${product.discountedPrice}</span>
          </div>
        ) : (
          <span>${product.discountedPrice}</span>
        )}
      </div>
      <button
        className="mt-4 bg-black text-white py-2 px-6 rounded-3xl hover:bg-gray-800 transition"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
      {product.reviews && product.reviews.length > 0 ? (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-2">Reviews</h2>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView="auto"
            className="w-full max-w-md mx-auto"
          >
            {product.reviews.map((review) => (
              <SwiperSlide
                key={id}
                className="flex flex-col items-center justify-center border p-3 rounded-md"
              >
                <p className="font-semibold">{review.username}</p>
                <p className="text-gray-700">{review.description}</p>
                <StarRating rating={review.rating} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p className="mt-6 text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
}

export default ProductPage;
