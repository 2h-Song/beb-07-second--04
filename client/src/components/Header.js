import React, {useState} from "react";
import { Link} from "react-router-dom";
import "./Header.css"

export default function Header(props){

    const [account, setAccount]=useState("")
    const [isConnected, setIsConnected]=useState(false)


    return(
        <div className="header">
            <Link to="/" onClick="location.reload();" className="mainlogo">SNORLAX</Link>
            <div className="menuBTN">
                <Link to="/mypage" className="menu">my page</Link>
                <Link to="/login"><button className="loginBTN">Login</button></Link>
                <Link to="/signup"><button className="joinBTN">Sign up</button></Link>
            </div>
        </div>
    )
}