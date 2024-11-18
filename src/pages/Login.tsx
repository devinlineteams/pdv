import { Link } from 'react-router-dom';
import UserSystems from '../server/UserSystem';
import {useNavigate} from 'react-router-dom';
import './css/login.css'

    function Login(){

        const navigate = useNavigate();

        const logar = ()=>{

            const login = (document.getElementById('login') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;
            UserSystems.UserOfSystem.setLogin = login;
            UserSystems.UserOfSystem.setPassword = password;

            UserSystems.Logar(login, password);

            if(UserSystems.UserOfSystem.getEstadoDeLogin ==true){
                if(UserSystems.UserOfSystem.getAtribuicao == "vendedor"){
                    navigate('/pdv');
                
                }
            }

            
        }


        return (
            <div className="dvLogin">
                <div className='loginInputs'>
                <h1>Login</h1>
                <label>Login:</label>
                <input id="login" name="login" type="text" placeholder='Login' />
                <label>Password:</label>
                <input id="password" name="login" type="password" placeholder='password' />
                <Link><h3>Esqueci minha senha:</h3></Link>
                <button onClick={logar} >Acessar</button>
                </div>
            </div>

        )
    }
    export default Login;

