import Arrow from "../Components/Homepage/Arrow";
import { ViewButton, ViewButton2 } from "../Components/Homepage/Button";
import Subtitle from "../Components/Homepage/Subtitle";
import Title from "../Components/Homepage/Title";
import CategoryNav from "../Components/Navbar/CategoryNav";
import Section from "../Components/Homepage/Section";
import Itemcard from "../Components/Homepage/Itemcard";
import Category from "../Components/Homepage/Category";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  faMobileButton,
  faComputer,
  faClock,
  faCamera,
  faHeadphones,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import Billboard1 from "../Components/Homepage/Billboard1";
import FeaturesHighlight from "../Components/Homepage/FeaturesHighlight";
import Countdown from "../Components/Homepage/Countdown";

const Homepage = () => {
  const [data, setData] = useState([]); // Added state for data

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/api/products");
      setData(response.data);
    };
    fetchData();
  }, []); // Removed data from dependency array

  const navigate = useNavigate();

  // Function to handle item card click
  const handleItemCard = (_id) => {
    navigate(`/product/${_id}`);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1100 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1100, min: 900 },
      items: 5,
    },
    tabletSmall: {
      breakpoint: { max: 900, min: 501 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 3,
    },
  };
  return (
    <div className="">
      <CategoryNav />

      {/* Flash Sales Section */}
      <Section
        subtitle={<Subtitle subtitle="Today's" />}
        title={<Title title="Flash Sales" />}
        context={<Countdown />}
        component={<Arrow />}
        body={
          <Carousel responsive={responsive}>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleItemCard(item._id)} //
                  className="text-left "
                >
                  <Itemcard
                    image={item.images[0]}
                    name={item.name}
                    price={item.variants[0].price}
                    discount={item.discount}
                    rating={item.rating}
                  />
                </button>
              );
            })}
          </Carousel>
        }
        showButton={
          <button className="">
            <ViewButton />
          </button>
        }
      />
      <hr className="" />
      {/* Categories */}
      <Section
        subtitle={<Subtitle subtitle="Categories" />}
        title={<Title title="Browse By Category" />}
        body={
          <div className="flex flex-wrap gap-5 xs:justify-center sm:justify-between pt-5">
            <Category category="Phones" icon={faMobileButton} />
            <Category category="Computers" icon={faComputer} />
            <Category category="SmartWacth" icon={faClock} />
            <Category category="Camera" icon={faCamera} />
            <Category category="Headphones" icon={faHeadphones} />
            <Category category="Gaming" icon={faGamepad} />
          </div>
        }
        component={<Arrow />}
      />
      <hr className="" />
      {/* Best Selling Products */}
      <Section
        subtitle={<Subtitle subtitle="This Month" />}
        title={<Title title="Best Selling Products" />}
        component={
          <button className="">
            <ViewButton2 />
          </button>
        }
        body={
          <Carousel responsive={responsive}>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleItemCard(item._id)} //
                  className="text-left "
                >
                  <Itemcard
                    image={item.images[0]}
                    name={item.name}
                    price={item.variants[0].price}
                    discount={item.discount}
                    rating={item.rating}
                  />
                </button>
              );
            })}
          </Carousel>
        }
      />
      <hr />
      <Billboard1 />
      {/* Explore our products Section */}
      <Section
        subtitle={<Subtitle subtitle="Our Products" />}
        title={<Title title="Explore Our Products" />}
        component={<Arrow />}
        body={
          <Carousel responsive={responsive}>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleItemCard(item._id)} //
                  className="text-left "
                >
                  <Itemcard
                    image={item.images[0]}
                    name={item.name}
                    price={item.variants[0].price}
                    discount={item.discount}
                    rating={item.rating}
                  />
                </button>
              );
            })}
          </Carousel>
        }
        showButton={
          <button>
            <ViewButton />
          </button>
        }
      />
      <Section
        subtitle={<Subtitle subtitle="Featured" />}
        title={<Title title="New Arrival" />}
        body={
          <div className="grid xs:grid-cols-2 xs:grid-rows-2  md:grid-cols-4 md:grid-rows-2 xs:gap-5 md::gap-8 lg:gap-10">
            <div className=" md:col-span-2 md:row-span-2">
              <img src="../src/assests/PS4.png " alt="" />
            </div>
            <div className="md:col-span-2 ">
              <img src="../src/assests/Women.png" alt="" />
            </div>
            <div className="">
              <img src="../src/assests/Speaker.png" alt="" />
            </div>
            <div className="">
              <img src="../src/assests/Perfume.png" alt="" />
            </div>
          </div>
        }
      />
      <FeaturesHighlight />
    </div>
  );
};

export default Homepage;
