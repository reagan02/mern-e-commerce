import Button from "../Components/Homepage/Button";

const Cart = () => {
  return (
    <div className="mt-10">
      <div className="border-2">
        <ul className="flex text-xl">
          <li>
            <a href="">Home</a>
          </li>
          <li className="px-3">/</li>
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
      </div>
      {/* Table */}
      <div className="mt-10">
        <table className="table-auto w-full">
          <thead className="grid grid-cols-4 gap-4 px-16 shadow-lg text-xl">
            <th className="py-2">Product</th>
            <th className="py-2">Price</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Subtotal</th>
          </thead>
          <tbody className="grid grid-cols-4 gap-4 px-16 shadow-lg text-xl">
            <td className="py-2">LCD Monitor</td>
            <td className="py-2">142</td>
            <td className="py-2">
              <input type="number" name="" id="" className="w-10" />
            </td>
            <td className="py-2">142</td>
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex justify-between">
        <Button
          title="Return To Shop"
          width="16"
          height="4"
          border={"border-2"}
          textColor={"text-black"}
          bgColor={"bg-white"}
        />
        <Button
          title="Update Cart"
          width="16"
          height="4"
          border={"border-2"}
          textColor={"text-black"}
          bgColor={"bg-white"}
        />
      </div>
      <div className="mt-10 flex justify-between ">
        <div className="flex">
          <input
            type="text"
            height={3}
            width={20}
            placeholder="Coupon Code"
            className="border-2 pl-10"
          />
          <Button
            title="Apply Coupon"
            width="12"
            height="3"
            border={"border-2"}
          />
        </div>
        <div className="px-4 border-4 w-40">
          <p className="text-xl">Cart Total</p>
          <div className="border-b-2 flex items-center justify-between">
            <p className="text-base">SubTotal</p>
            <p className="text-base">$1750</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
