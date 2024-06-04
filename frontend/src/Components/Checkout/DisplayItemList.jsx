import React from "react";
import ItemList from "./ItemList";
const DisplayItemList = () => {
	return (
		<div>
			asd
			{/* <ItemList
				image={productData.image}
				productName={productData.name}
				price={productData.price.toLocaleString()}
				quantity={quantity.current}
			/> */}
			{/* {locationState ? (
				<div className="">
					<ItemList
						image={productData.image}
						productName={productData.name}
						price={productData.price.toLocaleString()}
						quantity={quantity.current}
					/>
				</div>
			) : (
				<div className="lg:max-h-52 overflow-y-auto custom-scrollbar">
					{cartData.products &&
						cartData.products.map((item, index) => (
							<ItemList
								key={index}
								image={item.image}
								productName={item.productName}
								price={item.price.toLocaleString()}
								quantity={cartQuantity.products[index].quantity}
							/>
						))}
				</div>
			)} */}
		</div>
	);
};

export default DisplayItemList;
