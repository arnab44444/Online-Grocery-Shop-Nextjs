const featuredProducts = [
  {
    id: 1,
    name: "Fresh Mangoes",
    price: "৳299 / kg",
    image: "https://i.ibb.co.com/qY8NgL5x/2151542130.jpg",
  },
  {
    id: 2,
    name: "Grapes",
    price: "৳249 / kg",
    image: "https://i.ibb.co.com/VYWhvFz0/view-sweet-delicious-red-grapes.jpg",
  },
  
  {
    id: 3,
    name: "Bananas",
    price: "৳159 / dozen",
    image: "https://i.ibb.co.com/PGBv8btK/1671.jpg",
  },
  {
    id: 4,
    name: "Organic Tomatoes",
    price: "৳199 / kg",
    image: "https://i.ibb.co.com/v6TWmbHY/josephine-baran-g4wzh-Y8qi-Mw-unsplash.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-14">
          🌟 Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                  New
                </span>
              </div>

              {/* Product Details */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-1 mb-4">{product.price}</p>

                {/* Button */}
                <button className="px-4 py-2 w-full rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300 shadow">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
