import { createContext, useState, useEffect } from "react";

export const NomaContext = createContext();

export default function NomaContextProvider({ children }) {
	const [list, setList] = useState([]);
	const [coworking, setCoworking] = useState("");
	const [weather, setWeather] = useState([]);
	const initalFav = JSON.parse(window.localStorage.getItem("favorite") || "[]");
	const [fav, setFav] = useState(initalFav);
	const [color, setColor] = useState("black");
	const [favorite, setFavorite] = useState([]);

	useEffect(() => {
		window.localStorage.setItem("favorite", JSON.stringify(fav));
	}, [fav]);

	return (
		<NomaContext.Provider
			value={{
				list,
				setList,
				coworking,
				setCoworking,
				weather,
				setWeather,
				fav,
				setFav,
				color,
				setColor,
				favorite,
				setFavorite,
			}}
		>
			{children}
		</NomaContext.Provider>
	);
}
