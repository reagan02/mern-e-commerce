const Asidebar = () => {
  {
    /* Aside Bar */
  }
  return (
    <aside className="w-64 border border-green-500">
      <ul className=" flex flex-col h-full justify-between text-base border-r-2 ">
        <li>
          <div className="flex justify-between">
            <a href="">Woman&apos;s Fashion</a>
            <span className="pl-9 pr-4 font-bold"> &gt; </span>
          </div>
        </li>
        <li>
          <div className="flex justify-between">
            <a href="">Men&apos;s Fashion</a>{" "}
            <span className="pl-9 pr-4 font-bold"> &gt; </span>
          </div>
        </li>

        <li>
          <a href="">Electronics</a>
        </li>
        <li>
          <a href="">Home & Lifestyle</a>
        </li>
        <li>
          <a href="">Medicine</a>
        </li>
        <li>
          <a href="">Sport & Outdoor</a>
        </li>
        <li>
          <a href="">Baby&apos;s Toys</a>
        </li>
        <li>
          <a href="">Groceries & Pets</a>
        </li>
        <li>
          <a href="">Health & Beauty</a>
        </li>
      </ul>
    </aside>
  );
};

export default Asidebar;
