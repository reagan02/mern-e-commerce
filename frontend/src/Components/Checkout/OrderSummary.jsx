import ItemList from "./ItemList";
import PropTypes from "prop-types";
import OrderLabel from "./OrderLabel";
import PaymentMode from "./PaymentMode";
import Coupon from "./Coupon";
import CheckoutButton from "./CheckoutButton";
import { CheckoutContext } from "../../Context/Checkout/CheckoutContext";
import { useContext, useEffect } from "react";
const OrderSummary = ({ orders, fromCart }) => {
	const { subTotal, setSubTotal, totalPrice, setTotalPrice } =
		useContext(CheckoutContext);
	useEffect(() => {
		if (fromCart) {
			let total = 0;
			orders.forEach((order) => {
				total += order.price * order.quantity;
			});
			setSubTotal(total);
			setTotalPrice(total + 100);

			return;
		} else {
			setSubTotal(orders.price * orders.quantity);
			setTotalPrice(orders.price * orders.quantity + 100);
		}
	}, [orders]);

	return (
		<div className="h-auto mt-10 lg:mt-8">
			<div className=" xl:mr-20 ">
				{fromCart ? (
					orders.map((order) => (
						<div key={order.productID + order.variantIndex}>
							{(order.productID, order.variantIndex)}
							<ItemList
								image={order.image}
								productName={order.productName}
								price={order.price}
								quantity={order.quantity}
							/>
						</div>
					))
				) : (
					<div key={orders.productID + orders.variantIndex}>
						<ItemList
							image={orders.image}
							productName={orders.productName}
							price={orders.price}
							quantity={orders.quantity}
						/>
					</div>
				)}

				<div className="mt-4">
					{fromCart ? (
						<div>
							<OrderLabel name="Subtotal" value={subTotal} />
							<hr className=" my-3 border border-black" />
							<OrderLabel name="Shipping" value={100} />
							<hr className=" my-3 border border-black" />
							<OrderLabel name="Total" value={totalPrice} />
							<PaymentMode />
						</div>
					) : (
						<div>
							<OrderLabel name="Subtotal" value={subTotal} />
							<hr className=" my-3 border border-black" />
							<OrderLabel name="Shipping" value={100} />
							<hr className=" my-3 border border-black" />
							<OrderLabel name="Total" value={totalPrice} />
							<PaymentMode />
						</div>
					)}
				</div>
			</div>
			<div className="">
				<Coupon />
				<CheckoutButton title="Place Order" />
			</div>
		</div>
	);
};

OrderSummary.propTypes = {
	orders: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	fromCart: PropTypes.bool.isRequired,
};
export default OrderSummary;
