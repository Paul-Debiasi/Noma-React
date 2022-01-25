import axios from "axios";
import { useEffect, useContext } from "react";
import { NomaContext } from "./Context";
import styled from "styled-components";
import { WiCelsius } from "react-icons/wi";

const WeatherDiv = styled.div`
	display: flex;
	align-items: center;
`;

function WeatherApi({ weatherInfo }) {
	const { coworking, setWeather, weather, list } = useContext(NomaContext);

	useEffect(() => {
		const getWeather = async (city) => {
			if (weatherInfo) return;
			try {
				let key = "13bb5fa9c390402b92d102737210812";

				let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;
				const response = await axios.get(url);
				setWeather(response);
			} catch (e) {
				console.log("Error Fetching weather data: ", e.message);
			}
		};
		getWeather(list[0]?.city);
	}, [coworking, list, weatherInfo, setWeather]);

	return (
		<>
			<WeatherDiv className='WeatherDiv'>
				<p style={{ fontSize: " 22px" }}>
					{(weatherInfo || weather?.data?.current)?.temp_c}{" "}
					<WiCelsius style={{ fontSize: " 30px", marginLeft: "-10px" }} />{" "}
				</p>
				<img
					src={(weatherInfo || weather?.data?.current)?.condition?.icon}
					alt=''
				/>
			</WeatherDiv>
		</>
	);
}
export default WeatherApi;
