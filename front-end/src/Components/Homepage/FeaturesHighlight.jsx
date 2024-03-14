const FeaturesHighlight = () => {
  return (
    <div className="mx-48 my-10 flex justify-between ">
      <div className="py-2 flex flex-col items-center">
        <div className="size-20 rounded-full">
          <img src="../src/assests/Deliver.png" alt="" />
        </div>

        <div className="text-base font-semibold py-2">
          FREE AND FAST DELIVERY
        </div>
        <div className="text-sm">Free delivery for all orders over $140 </div>
      </div>
      <div className="py-2 flex flex-col items-center">
        <div className="size-20 rounded-full">
          <img src="../src/assests/Cs.png" alt="" />
        </div>
        <div className="text-base font-semibold py-2">
          24/7 CUSTOMER SERVICE
        </div>
        <div className="text-sm">Friendly 24/7 customer support </div>
      </div>
      <div className="py-2 flex flex-col items-center">
        <div className="size-20 rounded-full">
          <img src="../src/assests/Guarantee.png" alt="" />
        </div>
        <div className="text-base font-semibold py-2">MONEY BACK GUARANTEE</div>
        <div className="text-sm">We reurn money within 30 days </div>
      </div>
    </div>
  );
};

export default FeaturesHighlight;
