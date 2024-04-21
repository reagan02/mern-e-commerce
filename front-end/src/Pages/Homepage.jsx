import Arrow from "../Components/Homepage/Arrow";
import Button from "../Components/Homepage/Button";
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
        // showButton={
        //   <div className="my-6">
        //     <Button width="16" height="3" title="View All Product" />
        //   </div>
        // }
      />
      {/* Categories */}
      {/* <Section
        subtitle={<Subtitle subtitle="Categories" />}
        title={
          <div className="mt-5">
            <Title title="Browse By Category" />
          </div>
        }
        body={
          <div className="flex justify-between pt-5">
            <Category category="Phones" icon={faMobileButton} />
            <Category category="Computers" icon={faComputer} />
            <Category category="SmartWacth" icon={faClock} />
            <Category category="Camera" icon={faCamera} />
            <Category category="Headphones" icon={faHeadphones} />
            <Category category="Gaming" icon={faGamepad} />
          </div>
        }
        component={<Arrow />}
      /> */}
      {/* Best Selling Products */}
      {/* <Section
        subtitle={<Subtitle subtitle="This Month" />}
        title={
          <div className="mt-5">
            <Title title="Best Selling Products" />
          </div>
        }
        component={<Button width="8" height="3" title="View All" />}
      /> */}
      {/* <Billboard1 /> */}
      {/* Explore our products Section */}
      {/* <Section
        subtitle={<Subtitle subtitle="Our Products" />}
        title={<Title title="Explore Our Products" />}
        context={
          <div className="flex">
            <div className="flex flex-row ml-20 items-center">
              <div className="flex flex-col items-center font-semibold">
                <p className="text-base">Days</p>
                <p className="text-2xl font-inter">03</p>
              </div>
              <p className="text-orange-700 items-center font-bold px-4 text-xl">
                :
              </p>
            </div>

            <div className="flex flex-row ml-1 items-center">
              <div className="flex flex-col items-center font-semibold">
                <p className="text-base">Hours</p>
                <p className="text-2xl font-inter">07</p>
              </div>
              <p className="text-orange-700 items-center font-bold px-4 text-xl">
                :
              </p>
            </div>

            <div className="flex flex-row ml-1 items-center">
              <div className="flex flex-col items-center font-semibold">
                <p className="text-base">Minutes</p>
                <p className="text-2xl font-inter">23</p>
              </div>
              <p className="text-orange-700 items-center font-bold px-4 text-xl">
                :
              </p>
            </div>

            <div className="flex flex-row ml-1 items-center">
              <div className="flex flex-col items-center font-semibold">
                <p className="text-base">Seconds</p>
                <p className="text-2xl font-inter">31</p>
              </div>
            </div>
          </div>
        }
        component={<Arrow />}
        showButton={
          <div className="my-6">
            <Button width="16" height="3" title="View All Product" />
          </div>
        }
      /> */}
      {/* <Section
        subtitle={<Subtitle subtitle="Featured" />}
        title={<Title title="New Arrival" />}
        body={
          <div className="grid grid-cols-4 grid-rows-2 ">
            <div className="col-span-2 row-span-2">
              <img src="../src/assests/PS4.png " alt="" />
            </div>
            <div className=" col-span-2  ">
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
      /> */}
      {/* <FeaturesHighlight />
       */}
    </div>
  );
};

export default Homepage;
