
import { useInView } from "react-intersection-observer";
import "animate.css";
import cls1 from "/src/Components/Images/cls1.jpg";
import pic4 from "/src/Components/Images/pic4.jpg";
import hair from "/src/Components/Images/hair2.webp";

function Services() {
  // Hooks for in-view tracking for each section
  const { ref: classRef, inView: classInView } = useInView({ triggerOnce: true });
  const { ref: stylingRef, inView: stylingInView } = useInView({ triggerOnce: true });
  const { ref: hairRef, inView: hairInView } = useInView({ triggerOnce: true });

  return (
    <div className="border-b border-neutral-900 bg-white-chocolate pb-4 text-deep-chocolate">
      {/* Title */}
      <h1 className="my-5 text-center text-4xl animate__animated animate__fadeInDown">Services</h1>

      {/* Flex container with responsive flex direction */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Makeup Class Section */}
        <div
          ref={classRef}
          className={`w-full lg:w-1/3 ${
            classInView ? "animate__animated animate__fadeInLeft" : ""
          }`}
        >
          <div className="flex flex-col items-center mx-5 sm:mx-10">
            <img className="rounded-2xl" src={cls1} width={300} height={300} alt="Makeup Class" />
            <h3 className="py-5 text-xl">Makeup Class</h3>
            <p className="mb-4">
              We offer makeup classes both as VIP one-on-one sessions and in group settings to cater
              to your unique learning preferences.
            </p>
            <button className="bg-pink-500 text-white font-semibold my-4 py-2 px-3 rounded-2xl hover:bg-pink-700">
              Register
            </button>
          </div>
        </div>

        {/* Makeup Styling Section */}
        <div
          ref={stylingRef}
          className={`w-full lg:w-1/3 ${
            stylingInView ? "animate__animated animate__fadeInUp" : ""
          }`}
        >
          <div className="flex flex-col items-center mx-5 sm:mx-10">
            <img className="rounded-2xl" src={pic4} width={300} height={300} alt="Makeup Styling" />
            <h3 className="py-5 text-xl">Makeup Styling</h3>
            <p>
              We provide natural makeup, bridal makeup, and touch-ups for various programs and
              ceremonies to ensure you look stunning on any occasion.
            </p>
            <button className="bg-pink-500 text-white font-semibold my-4 py-2 px-3 rounded-2xl hover:bg-pink-700">
              Book Now
            </button>
          </div>
        </div>

        {/* Hair Styling Section */}
        <div
          ref={hairRef}
          className={`w-full lg:w-1/3 ${
            hairInView ? "animate__animated animate__fadeInRight" : ""
          }`}
        >
          <div className="flex flex-col items-center mx-5 sm:mx-10">
            <img className="rounded-2xl" src={hair} width={300} height={300} alt="Hair Styling" />
            <h3 className="py-5 text-xl">Hair Styling</h3>
            <p>
              We offer a range of beauty services including hair styling, ombre, and eyelash
              extensions. Our goal is to enhance your natural beauty for any occasion.
            </p>
            <button className="bg-pink-500 text-white font-semibold my-4 py-2 px-3 rounded-2xl hover:bg-pink-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
