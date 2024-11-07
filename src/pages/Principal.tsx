import {useNavigate} from 'react-router-dom';
import UserSystems from '../server/UserSystem';
import { useEffect } from 'react';


function Principal(){
    const navigate = useNavigate();
    //UserSystems.UserOfSystem.setEstadoDeLogin = false;

      useEffect(() => {

          if(UserSystems.UserOfSystem.getEstadoDeLogin){
            console.log(" estado do login é "+UserSystems.UserOfSystem.getEstadoDeLogin);
          }else{
          navigate('/login');
          }

      });

   
// {UserSystems.UserOfSystem.getEstadoDeLogin? <Home />:<Login />}
//import Home from "./Home";
//import Login from "./Login";
    return (


          <div>
          </div>

      )
}
export default Principal;
