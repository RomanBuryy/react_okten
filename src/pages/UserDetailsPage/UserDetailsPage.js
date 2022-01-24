
import {Link, Outlet, useLocation} from "react-router-dom";




const UserDetailsPage = () => {

    const {state} = useLocation();

    return (
        <div>
            <div>

                <p>{state.address.city}</p>
                <p>{state.address.street}</p>
                <p>{state.email}</p>
                <p>{state.phone}</p>

                <Link to={'posts'} state={state}>  <button>User posts</button> </Link>

            </div>



            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export default UserDetailsPage;