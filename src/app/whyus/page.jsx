import { GiFruitBowl } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { FaTags } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Why Choose <span className="text-blue-600">Us?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We don’t just deliver groceries — we deliver freshness, savings, and convenience right to your doorstep.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Fresh Products */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <GiFruitBowl className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              100% Fresh & Organic
            </h3>
            <p className="text-gray-600">
              Enjoy farm-fresh fruits and vegetables, carefully handpicked for quality and taste.
            </p>
          </div>

          {/* Fast Delivery */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <MdDeliveryDining className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Superfast Delivery
            </h3>
            <p className="text-gray-600">
              Groceries delivered in hours — keeping your kitchen stocked and stress-free.
            </p>
          </div>

          {/* Affordable Prices */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <FaTags className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Best Prices Everyday
            </h3>
            <p className="text-gray-600">
              Premium quality groceries at prices that make healthy living affordable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
