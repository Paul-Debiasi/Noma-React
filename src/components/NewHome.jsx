import React from "react";
import NotSearchHeader from "./NotSearchHeader";
import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NomaContext } from "./Context";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import "./NewHome.scss";

const HomeDiv = styled.div`
	width: 100%;
	min-height: 93vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 80px repeat(5, 1fr) 7vh;
	margin: 0;
	padding: 0;
`;

const createDebouncer = () => {
	let timeout = null;
	return (callback) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			callback();
			clearTimeout(timeout);
		}, 1000);
	};
};
const debounce = createDebouncer();

export default function NewHome() {
	const { coworking, setCoworking, setList } = useContext(NomaContext);
	const history = useHistory();

	const handleChange = (e) => {
		setCoworking(e.target.value.toLowerCase());
	};

	useEffect(() => {
		if (!coworking) return;
		async function loadNomad() {
			try {
				const response = await fetch("./data.json");

				const data = await response.json();

				let filterList = data.filter((item) => {
					return (
						item.name.toLowerCase().includes(coworking) ||
						item.city.toLowerCase().includes(coworking) ||
						item.country.toLowerCase().includes(coworking)
					);
				});
				setList([...filterList]);
				history.push("/new");
				setCoworking("");
			} catch (e) {
				console.log("Error ->", e.message);
			}
		}
		debounce(loadNomad);
		console.log(`::::::${coworking}`);
	}, [setList, coworking, history, setCoworking]);

	return (
		<HomeDiv>
			<NotSearchHeader />
			<div className='firstContainer'>
				<input
					onChange={handleChange}
					value={coworking}
					type='search'
					placeholder={`Search your next Destination `}
				/>
				<BsSearch className='icon' />
			</div>
			<div className='secContainer'>
				<h3>TOP 3 PLACES TO GO</h3>
				<div className='LONDON'>
					<h4>LONDON</h4>
				</div>
				<div className='CHANDRASHILA'>
					<h4>CHANDRASHILA</h4>
				</div>
				<div className='PHUKET'>
					<h4>PHUKET</h4>
				</div>
			</div>
		</HomeDiv>
	);
}
