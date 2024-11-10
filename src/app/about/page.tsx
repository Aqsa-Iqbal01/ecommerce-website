import Wrapper from "../components/wrapper/Wrapper";

export default function About() {
  return (
    <Wrapper>
        
      <section className="py-20 px-6 lg:px-20 text-center bg-[#E6C744]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold  mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-900 font-medium mb-12 leading-relaxed">
            Our fashion shop is dedicated to bringing you the latest trends with
            quality and style. From casual to high-end, we offer a variety of clothing
            for everyone. Discover pieces that empower you to express your unique
            style and personality.
          </p>
        </div>
        
        {/* Mission & Values Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md lg:max-w-xs text-center hover:scale-105 duration-500 hover:bg-gray-200 ">
            <h3 className="text-2xl font-bold   mb-4">Our Mission</h3>
            <p className="text-gray-900 leading-relaxed">
              Our mission is to inspire and empower individuals to feel confident
              and authentic in what they wear. We bring stylish and sustainable
              fashion that respects both people and the planet.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md lg:max-w-xs text-center hover:scale-105 duration-500 hover:bg-gray-200">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-900 leading-relaxed">
              Quality, innovation, and customer happiness are at the core of what
              we do. We strive to create a unique shopping experience that
              prioritizes customer satisfaction and environmental consciousness.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-20 text-center">
          <h4 className="text-3xl font-semibold text-gray-900 mb-4">
            Join us on our journey to sustainable fashion
          </h4>
          <p className="text-md text-gray-700 mb-8">
            Discover more about our sustainable practices and unique styles.
          </p>
          <a
            href="#explore"
            className="inline-block px-8 py-3 rounded-full text-white bg-black hover:bg-white hover:text-black font-semibold shadow-lg transition duration-300"
          >
            Explore Our Collection
          </a>
        </div>
      </section>
    </Wrapper>
  );
}