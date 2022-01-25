import "./NotSearchHeader.scss";
import { BsHeart } from "react-icons/bs";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";
import { NomaContext } from "./Context";
import { useContext } from "react";

function NotSearchHeader() {
	const { fav } = useContext(NomaContext);
	console.log(`fav length`, fav.length);

	return (
		<>
			<div className='Head'>
				<Link className='home' to='/'>
					{" "}
					<h2>NOMA-DREAM</h2>{" "}
				</Link>
				<div className='NewHead-div'>
					<Link className='fav' to='/fav'>
						<BsHeart style={{ color: fav.length > 0 ? "red" : "black " }} />
					</Link>
					<img src={avatar} alt='Fake person' />
				</div>
			</div>
		</>
	);
}

export default NotSearchHeader;
