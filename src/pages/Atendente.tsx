import {useNavigate} from 'react-router-dom';
import "./css/Atendente.css"



function Atendente(){

      const navigate = useNavigate();

  
      return (

      <div className="bodyPainel">
            <div className="menu">
            </div>
            <div className='painel'>
                  <div className='inputsProducto'>
                        <input id="amount" type='number' name="uantidade"/>
                        <input id="codBarra" type='number' name="uantidade"/>
                  </div>
                  <div id="list">

                  </div>
                  <div id="tot">

                        <div id="detail-full">
                              <label id="lb-tot-item">12</label>
                              <label id="lb-v-tot">Total: 125,00 R$</label>
                        </div>
                        <div id="close-sale">
                              <button>Fechar Venda</button>
                        </div>

                  </div>

            </div>
            <div className='painel-left'>
                  <div id='subPainel'>

                  </div>
                  <div id="calc">

                  </div>
            </div>
          
      </div>
      
        )
  }
  export default Atendente;