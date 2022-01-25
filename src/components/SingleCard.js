import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import "./SingleCard.scss";
import { IoIosArrowBack } from "react-icons/io";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { NomaContext } from "./Context";
import { useContext } from "react";
import { RiCelsiusLine } from "react-icons/ri";

const ItemDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100px ifr 1fr 1fr 100px;
	gap: 10px;
	width: 65%;
	height: 90%;
	background: #e2f5fd;
	color: white;
	padding: 40px;
`;

function SingleCard(oneItem) {
	const history = useHistory();
	const { weather } = useContext(NomaContext);

	return (
		<div className='container'>
			<div className='back' onClick={() => history.push("/new")}>
				<span>
					{" "}
					<IoIosArrowBack className='back-icon' />
				</span>
				<p> Back</p>
			</div>

			<ItemDiv>
				<div className='info'>
					<h3>{oneItem?.name}</h3>
					<p>
						{oneItem?.city} - {oneItem?.country}{" "}
					</p>
				</div>
				<div
					className='head'
					style={{
						background: `rgba(255, 255, 255, 0.9) url(${oneItem?.cover}) no-repeat bottom`,
						backgroundSize: "cover",
					}}
				></div>
				<div className='weather'>
					<p>
						{weather?.data?.current?.temp_c}{" "}
						<RiCelsiusLine className='c-icon' />{" "}
					</p>
					<img src={weather?.data?.current?.condition?.icon} alt='' />
				</div>
				<div className='description'>
					<p> {oneItem?.description} </p>
					<p className='address'>
						<span>Address</span> - {oneItem?.map?.address}
					</p>
				</div>
				<ul id='contact'>
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
				<div className='links'>
					<Link to={oneItem?.site}>Website</Link>
				</div>
			</ItemDiv>
		</div>
	);
}

export default SingleCard;
