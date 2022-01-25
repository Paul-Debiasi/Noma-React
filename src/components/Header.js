import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NomaContext } from "./Context";
import { AiFillHeart } from "react-icons/ai";
import avatar from "../images/avatar.png";

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

function Header() {
	const { coworking, setCoworking, setList, fav } = useContext(NomaContext);
	const history = useHistory();

	const handleChange = (e) => {
		setCoworking(e.target.value.toLowerCase());

		console.log(`${e.target.value}`);
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
	}, [setList, coworking, setCoworking, history]);

	return (
		<>
			<div className='Head'>
				<Link to='/'>
					{" "}
					<h2>NOMA-DREAM</h2>
				</Link>
				<div className='Head-div'>
					<input
						onChange={handleChange}
						value={coworking}
						type='search'
						placeholder='Search your next Destination '
					></input>
					<Link className='ToFav' to='/fav'>
						<AiFillHeart style={{ color: fav.length > 0 ? "red" : "black " }} />{" "}
					</Link>
					<img src={avatar} alt='Fake person' />
				</div>
			</div>
		</>
	);
}

export default Header;
