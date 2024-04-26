import Services from "../assests/Services.png";
import Bag from "../assests/Services_Bag.png";
import Money from "../assests/about_money.png";
import sideImage from "../assests/Side Image.png";
import Aboutcard from "../Components/About/Aboutcard";
import Teamcard from "../Components/About/Teamcard";
import Person1 from "../assests/person1.png";
import Person2 from "../assests/person2.png";
import Person3 from "../assests/person3.png";
import FeaturesHighlight from "../Components/Homepage/FeaturesHighlight";
const About = () => {
  return (
    <div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
      <ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
        <li>
          <a href="">Home</a>
        </li>
        <li className="xs:px-1 md:px-3">/</li>
        <li>
          <a href="">About</a>
        </li>
      </ul>
      {/* <div className="flex justify-between my-14">
        <div className="flex flex-col justify-center mr-20">
          <p className="text-5xl font-inter font-semibold">Our Story</p>
          <p className="pt-10">
            boricat si politing 0Launced in 2015, Exclusive is South Asia’s
            premier online shopping makterplace with an active presense in
            Bangladesh. Supported by wide range of tailored marketing, data and
            service solutions, Exclusive has 10,500 sallers and 300 brands and
            serves 3 millioons customers across the region.
          </p>
          <p className="pt-5">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img src={sideImage} alt="" />
      </div> */}

      {/* About Card */}
      {/* <div className="mb-20 mt-36 flex justify-between">
        <Aboutcard
          image={Services}
          number={10.5}
          context="Sellers active our site"
        />
        <Aboutcard
          image={Services}
          number={33}
          context="Monthly Product Sale"
        />
        <Aboutcard
          image={Bag}
          number={45.5}
          context="Customers active our site"
        />
        <Aboutcard
          image={Money}
          number={25}
          context="Annual gross sale in our site"
        />
      </div> */}

      {/* Team Card */}
      {/* <div className=" mt-10 mb-28 flex justify-between">
        <Teamcard
          image={Person1}
          name="Tom Cruise"
          position="Founder & Chairman"
        />
        <Teamcard
          image={Person2}
          name="Emma Watson"
          position="Managing Director"
        />
        <Teamcard
          image={Person3}
          name="Will Smith"
          position="Product Designer"
        />
      </div> */}

      {/* Features Highlight */}
      {/* <div className="my-36">
        <FeaturesHighlight />
      </div> */}
    </div>
  );
};

export default About;
