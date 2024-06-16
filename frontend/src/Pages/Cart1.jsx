import NavigationList from "../Components/NavigationList/NavigationList";

const Cart1 = () => {
	return (
		<div className="xs:my-4 sm:my-6 md:my-8 lg:my-10 ">
			<NavigationList
				list={[
					{ link: "/home", text: "Account" },
					{
						link: "",
						text: "Home",
					},
					{
						link: "",
						text: "Cart",
					},
				]}
			/>

			{/* Titles  */}
			<div className="hidden  lg:flex flex-col gap-5 xs:my-6 sm:my-8 md:my-10 lg:my-12 border-black border-b-2">
				<div className="grid md:grid-cols-5 lg:grid-cols-4 text-base lg:text-lg xl:text-xl px-3 lg:px-5  py-3 lg:py-4  border-2 shadow-md rounded-md  ">
					<p className="text-left md:col-span-2 lg:col-span-1">Product</p>
					<p className="text-center ">Price</p>
					<p className="text-center ">Quantity</p>
					<p className="text-right ">Subtotal</p>
				</div>
				{/* {updateCart.updateCart ? (
					<div className="flex border-2 shadow-md rounded-md  ">
						<input
							type="checkbox"
							className="mx-3"
							checked={selectAll}
							onChange={(e) => toggleSelectAll(e)}
						/>
						<div className="w-full grid md:grid-cols-5 lg:grid-cols-4 text-base lg:text-lg xl:text-xl px-3 lg:px-5  py-3 lg:py-4   ">
							<p className="text-left md:col-span-2 lg:col-span-1">Product</p>
							<p className="text-center ">Price</p>
							<p className="text-center ">Quantity</p>
							<p className="text-right ">Subtotal</p>
						</div>
					</div>
				) : (
					<div className="grid md:grid-cols-5 lg:grid-cols-4 text-base lg:text-lg xl:text-xl px-3 lg:px-5  py-3 lg:py-4  border-2 shadow-md rounded-md  ">
						<p className="text-left md:col-span-2 lg:col-span-1">Product</p>
						<p className="text-center ">Price</p>
						<p className="text-center ">Quantity</p>
						<p className="text-right ">Subtotal</p>
					</div>
				)} */}
			</div>
		</div>
	);
};

export default Cart1;
