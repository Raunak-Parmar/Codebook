import { Link, useNavigate } from "react-router-dom"
import {logout} from "../../services";

export const DropdownLoggedIn = ({setdropDown}) => {
    const navigate = useNavigate();
    
    function handleLogout(){
        logout();
        setdropDown(false);
        navigate("/");
    }

    return (
      <div id="dropdownAvatar" className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
          <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div className="font-medium truncate">raunak@example.com</div>
          </div>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
              <li>
                  <Link onClick={() => setdropDown(false)} to="/products" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All eBooks</Link>
              </li>
              <li>
                  <Link onClick={() => setdropDown(false)} to="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
          </ul>
          <div className="py-1">
              <span onClick={handleLogout} className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</span>
          </div>
      </div>
    )
  }