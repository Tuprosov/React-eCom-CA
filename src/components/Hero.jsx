function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-end bg-gray-200">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1200x600')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg p-6 md:p-12 bg-gray-200 bg-opacity-90 rounded-lg shadow-lg mr-6 md:mr-16">
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
    </section>
  );
}

export default HeroSection;
