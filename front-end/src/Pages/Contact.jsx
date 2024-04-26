import Button from "../Components/Homepage/Button";
import icons_phone from "../assests/icons_phone.png";
import icons_mail from "../assests/icons_mail.png";
import PropTypes from "prop-types";

const Contact = () => {
  return (
    <div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
      <ul className="flex xs:text-sm md:text-base lg:text-lg xl:text-xl">
        <li>
          <a href="">Home</a>
        </li>
        <li className="xs:px-1 md:px-3">/</li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div className=" xs:my-5 sm:my-8 md:my-12 lg:my-16 flex flex-col lg:flex-row md:justify-between gap-10">
        <div className="lg:p-8 md:justify-evenly lg:justify-normal flex xs:gap-8 md:gap-0 xs:flex-col md:flex-row lg:flex-col shadow-none lg:shadow-md">
          <div className="flex flex-col gap-5 lg:p-0 xs:p-4 sm:p-6 shadow-md lg:shadow-none ">
            <div className="flex items-center gap-5">
              <img
                src={icons_phone}
                alt="callicon"
                className="size-8 md:size-12"
              />
              <p className="text-base lg:text-xl font-semibold">Call to Us</p>
            </div>
            <ul className="flex flex-col gap-3 text-sm lg:text-lg">
              <li> We are available 24/7, 7 days a week.</li>
              <li> Phone: +8801611112222</li>
            </ul>
          </div>

          <hr className=" hidden lg:block my-6 border border-black " />

          <div className="flex flex-col gap-5 lg:p-0 xs:p-4 sm:p-6 shadow-md lg:shadow-none">
            <div className="flex items-center gap-5">
              <img
                src={icons_mail}
                alt="messageicon"
                className="size-8 md:size-12"
              />
              <p className="text-lg lg:text-xl font-semibold">Write to Us</p>
            </div>
            <ul className="flex flex-col gap-3 text-sm lg:text-lg ">
              <li>Fill out our form and we will contact</li>
              <li> Emails: customer@exclusive.com</li>
              <li>Emails: support@exclusive.com</li>
            </ul>
          </div>
        </div>

        <div className="xs:p-4 md:p-6 lg:p-8 w-full shadow-md ">
          <div className="flex flex-col md:flex-row gap-5">
            <Input placeholder="Your Name" />
            <Input placeholder="Your Email" />
            <Input placeholder="Your Phone" />
          </div>
          <textarea
            name=""
            id=""
            className="bg-gray-200 rounded-sm pl-3 grow my-5 pt-5 outline-none h-72 lg:text-sm w-full text-sm xl:text-base"
            placeholder="Your Message"
          ></textarea>
          <div className="flex justify-end">
            {/* Send Message Button */}
            <button className="text-white bg-orange-600 md:text-lg lg:text-xl xs:px-2 xs:py-2 md:px-4 xl:py-3 xl:px-5 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export const Input = (props) => {
  return (
    <input
      type="text"
      className="outline-none bg-gray-200 border-2 rounded-sm h-12 xl:h-14 pl-3 text-sm xl:text-base w-full"
      placeholder={props.placeholder}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
