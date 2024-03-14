import Button from "../Components/Homepage/Button";
import icons_phone from "../assests/icons_phone.png";
import icons_mail from "../assests/icons_mail.png";

const Contact = () => {
  return (
    <div className="mt-10">
      <ul className="flex text-xl">
        <li>
          <a href="">Home</a>
        </li>
        <li className="px-3">/</li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div className="flex justify-between py-20 ">
        <div className="px-10 shadow-xl h-full py-10">
          {/* Call to Us */}
          <div className="flex items-center">
            <img src={icons_phone} alt="" />
            <p className="text-xl pl-5 font-semibold">Call to Us</p>
          </div>
          <p className="py-6">We are available 24/7, 7 days a week.</p>
          <p className="pb-7">Phone: +8801611112222</p>

          <hr />
          {/* Write to Us */}
          <div className="flex items-center pt-7">
            <img src={icons_mail} alt="" />
            <p className="text-xl pl-5 font-semibold">Write to Us</p>
          </div>
          <p className="py-6">Fill out our form and we will contact</p>
          <p>Emails: customer@exclusive.com</p>
          <p className="py-6">Emails: support@exclusive.com</p>
        </div>
        <div className="ml-10 w-full px-10 shadow-xl py-10 flex flex-col justify-between">
          {/* Contact Details */}
          <div className="flex justify-between gap-5">
            <input
              type="text"
              className="bg-gray-200 border-2 rounded-sm h-14 w-1/3 pl-3"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="bg-gray-200 border-2 rounded-sm  h-14 w-1/3 pl-3"
              placeholder="Your Email"
            />
            <input
              type="text"
              className="bg-gray-200 border-2 rounded-sm h-14 w-1/3 pl-3"
              placeholder="Your Phone"
            />
          </div>
          <textarea
            name=""
            id=""
            className="bg-gray-200 border-2 rounded-sm pl-3 grow my-5 pt-5"
            placeholder="Your Message"
          ></textarea>
          <div className="flex justify-end">
            <Button title="Send Message" height="3" width="full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
