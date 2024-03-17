import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
import Addresses from "../Addresses/Addresses";
function General() {
    return (
            <div className='d-inline-flex flex-column col-5'>
                <Profile/>
                <Preferences/> 
            </div>
    );
}

export default General;