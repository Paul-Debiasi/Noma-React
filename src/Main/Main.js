import React from "react";
import Card from "../components/Card";
import "./Main.scss";
import { useContext } from "react";
import { NomaContext } from "../components/Context";
import styled from "styled-components";

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
	grid-auto-rows: 1fr;
	place-content: center;
	width: 100%;
	justify-items: center;
`;

export default function Main() {
	const { list } = useContext(NomaContext);

	const favorite = JSON.parse(localStorage.getItem("favorite") || "[]");

	return (
		<GridContainer className='Main'>
			{list.map((item) => {
				const favResult = favorite.find((favItem) => favItem.ID === item.ID);

				return (
					<Card
						key={item.ID}
						item={item}
						isFavorite={favResult ? true : false}
					/>
				);
			})}
		</GridContainer>
	);
}
