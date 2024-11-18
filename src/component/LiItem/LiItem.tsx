
import React, { Component }  from 'react';
import { ModelLi } from './LiInterface';

class LiItem extends Component<ModelLi>{

  

    constructor(props:ModelLi){
        super(props);
    }



    render(){

        return(
            <>
                <li className="liProduct">
                    {this.props.name}
                    <button id={this.props.id}>{this.props.id}</button>
                </li>
            </>
        )

    }
      
}
export default LiItem;