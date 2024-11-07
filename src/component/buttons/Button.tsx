import React, { Component }  from 'react';
import { ButtonInterface } from '../modelscomp/ButtonInterfaces';
import UserSystems from '../../server/UserSystem';

class Button extends Component<ButtonInterface>{

  

    constructor(props: ButtonInterface){
        super(props);
    }

    atribuindoDados(){

        UserSystems.UserOfSystem.setNome = "Jair de Oliveira";
      
        console.log(UserSystems.UserOfSystem.getNome);
    }


    render(){

        return(
            <>
                <button 
                    onClick={this.atribuindoDados}
                    key={this.props.id} 
                    className="btnSalvar">
                        {this.props.name}
                </button>

            </>
        )

    }
      
}
export default Button;