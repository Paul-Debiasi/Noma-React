import React from "react";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";
import "./Favorite.scss";
import { useContext } from "react";
import { NomaContext } from "../components/Context";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const FavContainer = styled.div`
    with:100%
	display: grid;
	place-content: center;
	grid-template-rows: 50px 1fr;
	gap: 20px;
	
`;

export default function Main() {
	const { fav, color } = useContext(NomaContext);
	const history = useHistory();

	return (
		<FavContainer className='Main-fav'>
			<div className='back-fav'>
				<div className='back'>
					<span>
						{" "}
						<IoIosArrowBack
							onClick={() => history.push("/new")}
							className='back-icons'
						/>
					</span>
					<p> Back</p>
				</div>
				<div>
					<h3>Favorites </h3>
				</div>
			</div>
			<div className='fav-list'>
				{fav.map((item) => (
					<Card key={item?.id} item={item} color={color} />
				))}
			</div>
		</FavContainer>
	);
}
