import Arrow from "../Components/Homepage/Arrow";
import Button from "../Components/Homepage/Button";
import Subtitle from "../Components/Homepage/Subtitle";
import Title from "../Components/Homepage/Title";
import Nav from "../Components/Navbar/Nav";
import Section from "../Components/Homepage/Section";
import Itemcard from "../Components/Homepage/Itemcard";
import Category from "../Components/Homepage/Category";
import { useState, useEffect } from "react";

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

const Homepage = () => {
  const [time, setTime] = useState({
    days: 3,
    hours: 7,
    minutes: 23,
    seconds: 31,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.seconds > 0) {
        setTime((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      } else if (time.minutes > 0) {
        setTime((prev) => ({
          ...prev,
          seconds: 59,
          minutes: prev.minutes - 1,
        }));
      } else if (time.hours > 0) {
        setTime((prev) => ({ ...prev, minutes: 59, hours: prev.hours - 1 }));
      } else if (time.days > 0) {
        setTime((prev) => ({ ...prev, hours: 23, days: prev.days - 1 }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="">
      <Nav />
      {/* Flash Sales Section */}
      <Section
        subtitle={<Subtitle subtitle="Today's" />}
        title={<Title title="Flash Sales" />}
        context={
          <div className="flex">
            <div className="flex flex-row ml-20 items-center">
              <div className="flex flex-col items-center font-semibold">
                <p className="text-base">Days</p>
                <p className="text-2xl font-inter">
                  {String(time.days).padStart(2, "0")}
                </p>
              </div>
              <p className="text-orange-700 items-center font-bold px-4 text-xl">
                :
              </p>
            </div>

            <div className="flex flex-row ml-1 items-center">
              <div className="flex flex-col items-center font-semibold">
                <p className="text-base">Hours</p>
                <p className="text-2xl font-inter">
                  {String(time.hours).padStart(2, "0")}
                </p>
              </div>
              <p className="text-orange-700 items-center font-bold px-4 text-xl">
                :
              </p>
            </div>

            <div className="flex flex-row ml-1 items-center">
              <div className="flex flex-col items-center font-semibold">
                <p className="text-base">Minutes</p>
                <p className="text-2xl font-inter">
                  {String(time.minutes).padStart(2, "0")}
                </p>
              </div>
              <p className="text-orange-700 items-center font-bold px-4 text-xl">
                :
              </p>
            </div>

            <div className="flex flex-row ml-1 items-center">
              <div className="flex flex-col items-center font-semibold">
                <p className="text-base">Seconds</p>
                <p className="text-2xl font-inter">
                  {String(time.seconds).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        }
        body={
          // Item Card Lists
          <div className="flex justify-between mt-10">
            <Itemcard
              image="https://m.media-amazon.com/images/I/61IU5NoMIaL.jpg"
              name="HAVIT HV-G92 Gamepad"
              price="$120"
              discount="-40%"
            />
            <Itemcard
              image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBN6Ata5yKhgmCtE5fFlpsu8rTNzRqVFryIvuMFEv45fcTFtN00tl5wJWdT6LkQHwBORFKIPMwUxe9F-l98aNcO9E5BW9wA0oIzw29dielIOThgsLyppt8KA"
              name="Romoss mini Power Banks 2in1"
              price="$75"
              discount="-15%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/p/2bf7d5377e94d0ba15ff02f560aa01aa.jpg_400x400q80.jpg"
              name="Case for iPhone 15"
              price="$6"
              discount="-3%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/p/6f3e88e7d83bddcfc5f6d08de124d406.jpg_400x400q75.jpg_.webp"
              name="YN SHEESH Graphic-tees"
              price="$90"
              discount="-10%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/ff/kf/S2d754a35996a4e82b90049212495ebaa5.jpg_400x400q75.jpg_.webp"
              name="AXEGN PLAIN TSHIRT UNISEX"
              price="$40"
              discount="-5%"
            />
          </div>
        }
        component={<Arrow />}
        showButton={
          <div className="my-6">
            <Button width="16" height="3" title="View All Product" />
          </div>
        }
      />
      {/* Categories */}
      <Section
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
      />
      {/* Best Selling Products */}
      <Section
        subtitle={<Subtitle subtitle="This Month" />}
        title={
          <div className="mt-5">
            <Title title="Best Selling Products" />
          </div>
        }
        body={
          // Item Card Lists
          <div className="flex justify-between mt-10">
            <Itemcard
              image="https://m.media-amazon.com/images/I/61IU5NoMIaL.jpg"
              name="HAVIT HV-G92 Gamepad"
              price="$120"
              discount="-40%"
            />
            <Itemcard
              image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBN6Ata5yKhgmCtE5fFlpsu8rTNzRqVFryIvuMFEv45fcTFtN00tl5wJWdT6LkQHwBORFKIPMwUxe9F-l98aNcO9E5BW9wA0oIzw29dielIOThgsLyppt8KA"
              name="Romoss mini Power Banks 2in1"
              price="$75"
              discount="-15%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/p/2bf7d5377e94d0ba15ff02f560aa01aa.jpg_400x400q80.jpg"
              name="Case for iPhone 15"
              price="$6"
              discount="-3%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/p/6f3e88e7d83bddcfc5f6d08de124d406.jpg_400x400q75.jpg_.webp"
              name="YN SHEESH Graphic-tees"
              price="$90"
              discount="-10%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/ff/kf/S2d754a35996a4e82b90049212495ebaa5.jpg_400x400q75.jpg_.webp"
              name="AXEGN PLAIN TSHIRT UNISEX"
              price="$40"
              discount="-5%"
            />
          </div>
        }
        component={<Button width="8" height="3" title="View All" />}
      />
      <Billboard1 />
      {/* Explore our products Section */}
      <Section
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
        body={
          // Item Card Lists
          <div className="grid grid-cols-5 grid-rows-2 mt-10 gap-10">
            <Itemcard
              image="https://m.media-amazon.com/images/I/61IU5NoMIaL.jpg"
              name="HAVIT HV-G92 Gamepad"
              price="$120"
              discount="-40%"
            />
            <Itemcard
              image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBN6Ata5yKhgmCtE5fFlpsu8rTNzRqVFryIvuMFEv45fcTFtN00tl5wJWdT6LkQHwBORFKIPMwUxe9F-l98aNcO9E5BW9wA0oIzw29dielIOThgsLyppt8KA"
              name="Romoss mini Power Banks 2in1"
              price="$75"
              discount="-15%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/p/2bf7d5377e94d0ba15ff02f560aa01aa.jpg_400x400q80.jpg"
              name="Case for iPhone 15"
              price="$6"
              discount="-3%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/p/6f3e88e7d83bddcfc5f6d08de124d406.jpg_400x400q75.jpg_.webp"
              name="YN SHEESH Graphic-tees"
              price="$90"
              discount="-10%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/ff/kf/S2d754a35996a4e82b90049212495ebaa5.jpg_400x400q75.jpg_.webp"
              name="AXEGN PLAIN TSHIRT UNISEX"
              price="$40"
              discount="-5%"
            />
            <Itemcard
              image="https://m.media-amazon.com/images/I/61IU5NoMIaL.jpg"
              name="HAVIT HV-G92 Gamepad"
              price="$120"
              discount="-40%"
            />
            <Itemcard
              image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRBN6Ata5yKhgmCtE5fFlpsu8rTNzRqVFryIvuMFEv45fcTFtN00tl5wJWdT6LkQHwBORFKIPMwUxe9F-l98aNcO9E5BW9wA0oIzw29dielIOThgsLyppt8KA"
              name="Romoss mini Power Banks 2in1"
              price="$75"
              discount="-15%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/p/2bf7d5377e94d0ba15ff02f560aa01aa.jpg_400x400q80.jpg"
              name="Case for iPhone 15"
              price="$6"
              discount="-3%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/p/6f3e88e7d83bddcfc5f6d08de124d406.jpg_400x400q75.jpg_.webp"
              name="YN SHEESH Graphic-tees"
              price="$90"
              discount="-10%"
            />
            <Itemcard
              image="https://lzd-img-global.slatic.net/g/ff/kf/S2d754a35996a4e82b90049212495ebaa5.jpg_400x400q75.jpg_.webp"
              name="AXEGN PLAIN TSHIRT UNISEX"
              price="$40"
              discount="-5%"
            />
          </div>
        }
        component={<Arrow />}
        showButton={
          <div className="my-6">
            <Button width="16" height="3" title="View All Product" />
          </div>
        }
      />
      <Section
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
      />
      <FeaturesHighlight />
    </div>
  );
};

export default Homepage;
