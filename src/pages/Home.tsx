import {useEffect } from "react";
import Menu from "../template/menu/menu";
import {useNavigate} from 'react-router-dom';
import UserSystems from "../server/UserSystem";
//import UserSystems from "../server/UserSystem";

function Home(){

    const navigate = useNavigate();

    const setarAdmin = ()=>{
        navigate('/Administrador');
    }

    useEffect(()=>{
      if(UserSystems.UserOfSystem.getEstadoDeLogin ==true){
          if(UserSystems.UserOfSystem.getAtribuicao == "vendedor"){
              navigate('/pdv');
              console.log('Entrou no if '+UserSystems.UserOfSystem.getEstadoDeLogin );
              console.log('Entrou no if '+UserSystems.UserOfSystem.getAtribuicao );
          }
        }else{
          navigate('/login');
      }
    });


    return (
            <>
              <h1>pagina home</h1>
              <Menu />
              <button onClick={setarAdmin}>mudar de pagina</button>
            </>

          )
      

   
}
export default Home;





