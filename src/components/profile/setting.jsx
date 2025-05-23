    import { Link } from "react-router-dom";

    export default function Setting() {
        return <>
            <div className="setting-container">
                <ul>
                    <li>setting</li>
                    <Link to="/login">
                        <li className="LogOut-btn">log out</li>
                    </Link>
                </ul>
            </div>
        </>
    }