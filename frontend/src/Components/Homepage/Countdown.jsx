import { useState, useEffect } from "react";

const Countdown = () => {
	const [time, setTime] = useState({
		days: 3,
		hours: 7,
		minutes: 23,
		seconds: 31,
	});

	useEffect(() => {
		const timer = setInterval(() => {
			if (time.seconds > 0) {
				setTime((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
			} else if (time.minutes > 0) {
				setTime((prev) => ({
					...prev,
					seconds: 59,
					minutes: prev.minutes - 1,
				}));
			} else if (time.hours > 0) {
				setTime((prev) => ({ ...prev, minutes: 59, hours: prev.hours - 1 }));
			} else if (time.days > 0) {
				setTime((prev) => ({ ...prev, hours: 23, days: prev.days - 1 }));
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [time]);
	return (
		<div className="flex xs:ml-12 sm:ml-20 ">
			<div className="flex flex-row  items-center ">
				<div className="flex flex-col items-center font-semibold">
					<p className="xs:text-xs md:text-base">Days</p>
					<p className="lg:text-2xl font-inter">
						{String(time.days).padStart(2, "0")}
					</p>
				</div>
				<p className="text-custom-red items-center font-bold px-1 sm:px-4 xs:text-sm text-xl">
					:
				</p>
			</div>

			<div className="flex flex-row ml-1 items-center">
				<div className="flex flex-col items-center font-semibold">
					<p className="xs:text-xs md:text-base">Hours</p>
					<p className="lg:text-2xl font-inter">
						{String(time.hours).padStart(2, "0")}
					</p>
				</div>
				<p className="text-custom-red items-center font-bold px-1 sm:px-4 xs:text-sm text-xl">
					:
				</p>
			</div>

			<div className="flex flex-row ml-1 items-center">
				<div className="flex flex-col items-center font-semibold">
					<p className="xs:text-xs md:text-base">Minutes</p>
					<p className="lg:text-2xl font-inter">
						{String(time.minutes).padStart(2, "0")}
					</p>
				</div>
				<p className="text-custom-red items-center font-bold sm:px-1 xs:text-sm md:text-xl">
					:
				</p>
			</div>

			<div className="flex flex-row ml-1 items-center">
				<div className="flex flex-col items-center font-semibold">
					<p className="xs:text-xs md:text-base">Seconds</p>
					<p className="lg:text-2xl font-inter">
						{String(time.seconds).padStart(2, "0")}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Countdown;
