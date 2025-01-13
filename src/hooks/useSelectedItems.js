// custom hook რამდენიმე თარიღის/დროის ან ნებისმიერი რამის ასარცევად
// არგუმენტად იღებს limit-ს რომელიც განსაზღვრავს მაქსიმუმ რამდენი
// რამის არჩევაა შესაძლებელი

import { useState } from "react";
export default function useSelectedItems(limit) {
	const [array, setArray] = useState([]);

	function handleSelectingItems(item) {
		let newArray = [...array];
		// თუ უკვე არჩეულია, გაფილტრე
		if (newArray.includes(item)) {
			console.log("includes");
			newArray = newArray.filter((hours) => hours !== item);
		} else {
			// თუ ორზე ნაკლებია დაამატე ახალი
			if (newArray.length < limit) {
				newArray.push(item);
			} else {
				// თუ უკვე ორია, ყველაზე ძველი ამოიღე და ახალი დაამატე.
				newArray.shift();
				newArray.push(item);
			}
		}

		// განაახლე სტეიტი
		setArray(newArray);
	}
	// დააბრუნე მასივი და ფუნქცია არჩევისთვის
	return { array, handleSelectingItems };
}
