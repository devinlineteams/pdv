import Funcionario from "../model/Funcionario";

class DaoLogar{


  daoLogar(login:string, password:string){

    const objetoUsuario = [
        {
            Login:"jnojair",
            atrinuicao:"vendedor",
            password:"123456",
            situacao:"ativo",
            estadoDeLogin:true
        }
    ]

      return objetoUsuario;
    }

}
export default DaoLogar;

//https://typescript.tv/errors/