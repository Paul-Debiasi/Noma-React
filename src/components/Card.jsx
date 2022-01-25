import "./Card.scss";
import WeatherApi from "./WeatherApi";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { NomaContext } from "../components/Context";

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 130px 1fr;
	width: 500px;
	height: 400px;
	margin-top: 50px;
`;

function Card({ item, isFavorite }) {
	const { fav, setFav, list, weather, setColor, setFavorite } =
		useContext(NomaContext);
	const [realFav, setRealFav] = useState(isFavorite);
	const handleClick = (id) => {
		const data = list.filter((item) => item.ID === id)[0];
		if (!fav.some((item) => item.ID === id)) {
			setFav([
				...fav,
				{
					...data,
					heart: true,
					weatherInfo: weather?.data?.current,
					colorObj: "red",
				},
			]);
			setFavorite([...fav]);

			if (fav.some((itemColor) => itemColor.hasOwnProperty("colorObj"))) {
				setColor("red");
			}
		} else return;
	};
	useEffect(() => {
		const itemFav = fav.find((itemFav) => itemFav.ID === item.ID);
		itemFav ? setRealFav(true) : setRealFav(false);
	}, [fav, item.ID]);

	return (
		<CardContainer className='card-container'>
			<div className='hoverload'>
				<h3>
					{" "}
					<Link to={`/card/${item.ID}`}>
						{" "}
						{item.name.length > 25 ? item.name.slice(0, 25) + "..." : item.name}
					</Link>
				</h3>
				<p>
					{item.city} - {item.country}
				</p>
				<ul>
					<li>
						{" "}
						<BsFacebook className='icon' />{" "}
					</li>
					<li>
						{" "}
						<BsTwitter className='icon' />{" "}
					</li>
					<li>
						{" "}
						<BsInstagram className='icon' />{" "}
					</li>
				</ul>
			</div>
			<div className='weather'>
				<WeatherApi weatherInfo={item.weatherInfo} />
			</div>
			<div
				className='imageContainer'
				style={{
					background: `rgba(255, 255, 255, 0.9) url(${item.cover}) no-repeat bottom`,
				}}
			>
				<AiFillHeart
					style={{
						color: realFav ? "red" : "black",
					}}
					onClick={() => {
						handleClick(item.ID);
						// setColor("red");
					}}
				/>
			</div>
		</CardContainer>
	);
}

export default Card;
