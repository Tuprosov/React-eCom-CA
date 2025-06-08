function HeroSection() {
  return (
    <section className="w-full h-auto flex xl:flex-row flex-col-reverse items-center justify-end bg-gray-200 p-12 overflow-hidden gap-8">
      {/* Content */}
      <div className="max-w-lg p-6 bg-gray-200 bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Discover the Latest Trends
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Shop the newest arrivals and exclusive deals.
        </p>
        <a
          href="/shop"
          className="inline-block mt-6 px-6 py-3 text-lg font-semibold bg-black text-white hover:bg-gray-800 rounded-3xl shadow-md transition"
        >
          Shop Now
        </a>
      </div>

      {/* Image */}
      <img
        src="https://placehold.co/1200x600?text=Placeholder&font=roboto"
        alt="Shopping Hero"
        className="w-full max-w-2xl xl:h-[400px] object-cover rounded-lg"
      />
    </section>
  );
}

export default HeroSection;
