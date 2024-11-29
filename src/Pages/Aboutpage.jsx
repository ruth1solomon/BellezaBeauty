
import { useInView } from "react-intersection-observer";
import "animate.css";
import img from "/src/Components/Images/img2.jpg";

function Aboutpage() {
  // Hooks for each section to track visibility
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <div className="border-b bg-white-chocolate border-neutral-900 pb-4 text-deep-chocolate">
      {/* Title */}
      <h1
        ref={titleRef}
        className={`my-5 font-thin tracking-tight text-center lg:text-4xl ${
          titleInView ? "animate__animated animate__fadeInDown" : ""
        }`}
      >
        About Us
      </h1>

      <div className="flex flex-wrap">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              ref={imgRef}
              className={`rounded-2xl ${
                imgInView ? "animate__animated animate__zoomIn" : ""
              }`}
              src={img}
              width={300}
              height={300}
              alt="Lady Pic"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p
              ref={textRef}
              className={`my-2 max-w-xl py-6 mt-16 ${
                textInView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              We are passionate about inclusivity and diversity. Our carefully
              curated collection is designed to meet the needs of every makeup
              enthusiast, from beginners to professionals. Whether you’re
              looking for a natural everyday look or a bold statement, we have
              the perfect products to help you achieve your desired style.
              <br />
              <br />
              We are committed to using only the finest ingredients that are
              safe for your skin and the environment. Our products are
              ethically sourced, and we take pride in being a brand that is
              both eco-conscious and socially responsible.
              <br />
              <br />
              We believe that makeup is more than just a routine; it’s a form
              of self-expression and an art that empowers individuals to feel
              their best. Our mission is to provide high-quality, innovative,
              and cruelty-free makeup products that cater to all skin tones and
              types, helping you to celebrate your unique beauty every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
