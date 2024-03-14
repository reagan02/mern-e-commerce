import { useState } from "react";

const Billboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01picZtn1pgfiWtkV70_!!6000000005390-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01yo2AfH1uDQVMUmu7w_!!6000000006003-0-tps-1976-688.jpg_2200x2200q80.jpg  ",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01Hsv9P31v1o4UQIflN_!!6000000006113-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i2/O1CN01irzagQ23JgSPRl8N4_!!6000000007235-0-tps-1976-688.jpg_2200x2200q80.jpg",
    "https://lzd-img-global.slatic.net/g/tps/imgextra/i4/O1CN01XpHuje27FnYoNofDV_!!6000000007768-0-tps-1976-688.jpg_2200x2200q80.jpg",
  ];
  return (
    <div className="w-full h-full ml-11 relative ">
      <div className="relative h-full ">
        <img src={slides[currentSlide]} className="object-cover" />
        <div className="flex justify-center py-2 gap-2 absolute bottom-0 left-0 right-0">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`btn btn-xs h-3 w-3 rounded-full ${
                currentSlide === index ? "bg-black" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Billboard;
