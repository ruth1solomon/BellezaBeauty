
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "animate.css";

function Contact() {
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: false, // Animates every time it comes into view
  });

  return (
    <div
      ref={contactRef}
      className={`min-h-screen bg-white-chocolate border-b border-neutral-900 flex flex-col items-center py-10 px-5 sm:px-10 ${
        contactInView ? "animate__animated animate__zoomIn" : ""
      }`}
    >
      {/* Title */}
      <h1
        className={`text-4xl font-thin text-center text-deep-chocolate mb-8 ${
          contactInView ? "animate__animated animate__bounceInLeft" : ""
        }`}
      >
        Contact Us
      </h1>

      {/* Contact Info */}
      <div
        className={`border-pink-500 border-2 w-full max-w-md rounded-lg shadow-lg p-8 text-dark-brown ${
          contactInView ? "animate__animated animate__bounceInLeft animate__delay-1s" : ""
        }`}
      >
        {/* Address */}
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-pink-500 text-xl mr-3" />
          <p>Bole Dat Tower 1st Floor, Addis Ababa, Ethiopia</p>
        </div>

        {/* Phone */}
        <div className="flex items-center mb-4">
          <FaPhone className="text-pink-500 text-xl mr-3" />
          <p>0911786389 / 0928577777</p>
        </div>

        {/* Email */}
        <div className="flex items-center mb-4">
          <FaEnvelope className="text-pink-500 text-xl mr-3" />
          <p>Feven@belleza.com</p>
        </div>

        {/* Instagram */}
        <div className="flex items-center mb-4">
          <FaInstagram className="text-pink-500 text-xl mr-3" />
          <p>
            <a
              href="https://instagram.com/beautyservices"
              target="_blank"
              rel="noopener noreferrer"
            >
              @bellezamakeup_1
            </a>
          </p>
        </div>
      </div>

      {/* Social Icons */}
      <div
        className={`flex gap-4 my-5 ${
          contactInView ? "animate__animated animate__flipInX animate__delay-2s" : ""
        }`}
      >
        <FaInstagram className="text-pink-500 text-2xl" />
        <FaFacebook className="text-blue-700 bg-white rounded-full text-2xl" />
        <FaWhatsapp className="text-green-400 text-2xl" />
        <FaTiktok className="text-white text-2xl" />
      </div>
    </div>
  );
}

export default Contact;
