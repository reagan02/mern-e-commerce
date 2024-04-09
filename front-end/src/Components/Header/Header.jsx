import { useEffect, useState } from "react";
import axios from "axios";
const Header = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const userID = sessionStorage.getItem("userID");
    const fetchUsername = async () => {
      {
        try {
          const response = await axios.get(
            `http://localhost:4000/api/accounts/${userID}`
          );
          setUserName("Welcome " + response.data.account.userName);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUsername();
  }, []);
  return (
    <div className="bg-black w-full flex xs:justify-center md:justify-between sm:items-center lg:px-20 lg:py-2 md:px-14 md:py-2 xs:px-10 xs:py-1 ">
      <div className="text-white ">
        <p className="lg:text-base md:text-sm sm:text-xs sm:block xs:hidden">
          {userName}
        </p>
      </div>
      <div className="text-white ">
        <p className="lg:text-base md:text-sm sm:text-xs sm:block xs:hidden">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%{" "}
          <u>ShopNow</u>
        </p>

        <p className="text-xs sm:hidden ">
          <u>Shop Now</u> For All Swim Suits - OFF 50%
        </p>
      </div>
      <div className="lg:text-base md:text-sm hidden md:block">
        <select name="Language" className="bg-black text-white">
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
          <option value="Korean">Korean</option>
          <option value="v">V</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
