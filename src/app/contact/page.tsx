import Wrapper from "../components/wrapper/Wrapper";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <Wrapper>
      <section className="py-20 px-6 lg:px-20 text-center bg-[#E6C744]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-900 font-medium mb-12 leading-relaxed">
            For any inquiries, collaborations, or assistance, feel free to reach out.
            We’re here to help you with any questions about our products and services.
          </p>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
          {/* Email */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md lg:max-w-xs text-center hover:scale-105 duration-500 hover:bg-gray-200">
            <h3 className="text-2xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-900 leading-relaxed">
              info@fashionshop.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md lg:max-w-xs text-center hover:scale-105 duration-500 hover:bg-gray-200">
            <h3 className="text-2xl font-bold mb-4">Call Us</h3>
            <p className="text-gray-900 leading-relaxed">
              +1 (123) 456-7890
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-20 text-center">
          <h4 className="text-3xl font-semibold text-gray-900 mb-6">
            Connect with us on social media
          </h4>
          <div className="flex justify-center gap-8 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black hover:scale-110 transition duration-300"
            >
              <FaTwitter className="text-4xl" aria-label="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black hover:scale-110 transition duration-300"
            >
              <FaInstagram className="text-4xl" aria-label="Instagram" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-black hover:scale-110 transition duration-300"
            >
              <FaFacebook className="text-4xl" aria-label="Facebook" />
            </a>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <p className="text-md text-gray-700 mb-8">
            We look forward to hearing from you!
          </p>
          <a
            href="#contactForm"
            className="inline-block px-8 py-3 rounded-full text-white bg-black hover:bg-white hover:text-black font-semibold shadow-lg transition duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </Wrapper>
  );
}