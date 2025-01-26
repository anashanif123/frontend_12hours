// import axios from "axios";
// import { Link, useNavigate } from "react-router";
// import { appRoutes } from "../constant/constant";
// import Cookies from "js-cookie";
// import { useContext } from "react";
// import  { Authcontext } from "../contexts/usercontext";
import { ToastContainer, toast } from 'react-toastify';
import InputMask from "react-input-mask";



 function Login (){

    return(

<>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/motion-tailwind.css"
  />
  <ToastContainer />

 
   <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form >
        <div className="mb-6">
      <label
        htmlFor="cnic"
        className="block text-sm font-semibold text-gray-700 mb-2"
      >
        CNIC
      </label>
      <InputMask
        mask="99999-9999999-9"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
        placeholder="XXXXX-XXXXXXX-X"
        required
      />
    </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-black font-semibold rounded-lg shadow-lg hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
       
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,160L18.5,144C36.9,128,74,96,111,74.7C147.7,53,185,43,222,64C258.5,85,295,139,332,170.7C369.2,203,406,213,443,224C480,235,517,245,554,240C590.8,235,628,213,665,181.3C701.5,149,738,107,775,112C812.3,117,849,171,886,170.7C923.1,171,960,117,997,106.7C1033.8,96,1071,128,1108,122.7C1144.6,117,1182,75,1218,58.7C1255.4,43,1292,53,1329,64C1366.2,75,1403,85,1422,90.7L1440,96L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  
</>





    )
}

export default Login;