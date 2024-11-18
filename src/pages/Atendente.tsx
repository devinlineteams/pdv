
import { useNavigate } from "react-router-dom";
import "./css/Atendente.css"

import { Component } from "react";
import Produto from "../model/Produto";
import Carrinho from "../server/Carrinho";
import ServiceAllProdutos from "../server/ServiceAllProdutos";


  export class Atendente extends Component{

      product = new Produto('','','','','','',0,'','',0,0);
      cartEnd:Produto [] = [];

      state ={
            searchValue:'',
            displayProduto:'',
            resetDisplayProdut:false,
            totalItem:0,
            valorTotal:0  
      }

         // const navigate = useNavigate();
          
            cart = new Carrinho();
            serviceProduct = new ServiceAllProdutos();
      

           elista =  this.serviceProduct.getProdutoForCodBarra();
             
            handleChange = (e) => {

                  const {value} = e.target;

                  for(let i=0; i<this.elista.length;i++){
                        if(this.elista[i].codBarra == value){
                             
                              this.product.setId(this.elista[i].id);
                              this.product.setName(this.elista[i].name)
                              this.product.setCategory(this.elista[i].category);
                              this.product.setMarca(this.elista[i].marca);
                              this.product.setLine(this.elista[i].line);
                              this.product.setCodBarra(this.elista[i].codBarra);
                              this.product.setPrice(this.elista[i].price);
                              this.product.setTom(this.elista[i].tom);
                              this.product.setValidity(this.elista[i].validity);
                              this.product.setQuantidadeEstoque(this.elista[i].quantidadeEstoque);
                              this.atribuirElementoDisplayProduto();
                              this.handleOnClickAddProdutoCart();


                             
                        }                  
                  }
                //  this.setState({searchValue:value});
            }
           async atribuirElementoDisplayProduto(){
                  const mount = (document.getElementById('amount') as HTMLInputElement).value;
                  this.product.setQuant(parseFloat(mount))
                  this.product.setvTotla(parseFloat(mount));
                  const divSearch =(document.getElementById('dvDisplayProduct') as HTMLDivElement);
                  const h1element = (document.createElement('h1') as unknown as HTMLTitleElement);
                  h1element.setAttribute('id', 'dpProdduto');
                  h1element.textContent = ` ${this.product.getName()} ${this.product.getMarca()} Nº ${this.product.getTom()}, ${this.product.getLine()}` 
                  divSearch.appendChild(h1element);
            }
            deleteElementoDisplayProduto(){
                  const divSearch =(document.getElementById('dvDisplayProduct') as HTMLDivElement);
                  const h1element = (document.getElementById('dpProdduto') as HTMLHRElement)
                  
                  if(h1element!=null){
                        divSearch.removeChild(h1element);
                  }  
            }
            handleOnClickAddProdutoCart = ()=>{
                
                  Atendente.cart.addProductToTheCart(this.product)
                  this.setTotalItemInState();
                  this.setValorTotalInState();
                  this.deleteElementoDisplayProduto();
                  this.createElementoLIDisplay();
      
            }

            handleDeletPorductListDisplay = (e:any)=>{
                  const {id} = e.target;
                 
                  const ul = (document.getElementById('ul-li') as HTMLUListElement);
                  const li = (document.getElementById(id) as HTMLLIElement)
                  ul.removeChild(li);
                  this.cart.deleteProduct(id);
            }

            setValorTotalInState(){
                  this.setState({valorTotal:this.cart.getTotalValue()})
            }
            setTotalItemInState(){
                  this.setState({totalItem:this.cart.getTotalItem()})
            }
            createElementoLIDisplay(){
                  const {totalItem} = this.state;
                  const ul = (document.getElementById('ul-li') as HTMLUListElement);
                  const li =  (document.createElement('li') as HTMLLIElement);
                  const button = (document.createElement('button') as HTMLButtonElement);
                  const lbItem = (document.createElement('label') as HTMLLabelElement);
                  const lbQuant = (document.createElement('label') as HTMLLabelElement);
                  const lbDesc = (document.createElement('label') as HTMLLabelElement);
                  const desconto = (document.createElement('input') as HTMLInputElement);
                  const lbvUnit = (document.createElement('label') as HTMLLabelElement);
                  const lbvTotal = (document.createElement('label') as HTMLLabelElement);

                  lbQuant.textContent = this.product.getQuant().toString();
                  lbvTotal.textContent = this.product.getVTotal().toString();
                  lbItem.textContent = (totalItem+1).toString();
                  lbDesc.textContent = this.product.getName();
                  li.setAttribute('class', 'li-list-product')
                  button.addEventListener('click',this.handleDeletPorductListDisplay);
                  button.setAttribute('id', this.product.getId());
                  button.setAttribute('class', 'btn-del-product btn-delete-li mg-btn-li')
                //  button.textContent = "delete";
                  lbvUnit.setAttribute('class', 'lb-v-unit')
                  lbvUnit.textContent = this.product.getPrice().toString();


                  li.setAttribute('id', this.product.getId());
                  li.appendChild(lbItem);
                  li.appendChild(lbQuant);
                  li.appendChild(lbDesc);
                  li.appendChild(desconto)
                  li.appendChild(lbvUnit);
                  li.appendChild(lbvTotal);
                  li.appendChild(button);
                  ul.appendChild(li);
                  this.clearElementoInputs();
                  
            }
            clearElementoInputs(){
                  setInterval(()=>{
                        const codBarr = (document.getElementById('codBarra') as HTMLInputElement).value = "";
                        const amount = (document.getElementById('amount') as HTMLInputElement).value = '1';
                  },2500);
                 
            }
            componentDidMount(): void {
                 // console.log("entrou no didmount");
            }
            componentWillUnmount(): void {
                //  console.log("entrou no willUmMount");
            }
            componentDidUpdate(): void {
                //  console.log("entrou no didUpdate and lenght");
  
            }
            componentDidCatch(): void {
                //  console.log("entrou no didCatch");
            }
         


      render(){

            const {searchValue,valorTotal, totalItem} = this.state;
          
      

           const filterLista = searchValue.length>0 ?
                  this.elista.filter(objeto=>{
                     return objeto.codBarra.includes(searchValue);
                     
                  })
                  :'';

             console.log(filterLista);

            return (
                   <div className="bodyPainel">
                        <div className="menu">
                              <button></button>
                        </div>
                        <div className='painel'>
                              <div className='inputsProducto'>
                                    <input id="amount" type='number' name="quantidade" defaultValue="1"/>
                                    <input onChange={this.handleChange} id="codBarra" type="search" name="descricao" placeholder='Código de barra' defaultValue=""/>
                              </div>
                              <div id="list">
                                    <div id="display">
                                          <div id="dvDisplayProduct" className="displayProduct"></div>
                                          <button onClick={ this.deleteElementoDisplayProduto} >Reset</button>
                                    </div>
                                    <div id="listProdctCar">
                                          <div id="md-dv-li">
                                                <ul id="md-ul-li">
                                                      <li id="md-li">
                                                            <label>Item</label>
                                                            <label> quant</label>
                                                            <label>Descrição</label>
                                                            <label> Desconto%</label>
                                                            <label>V. Unitário</label>
                                                            <label>V. Total</label>
                                                            <label id="delete" className="btn-delete-li mg-btn-li"></label>
                                                            <label id="plus-item"></label>
                                                      </li>
                                                </ul>
                                          </div>
                                          <ul id="ul-li">
                                               
                                                
                                          </ul>
                                    </div>
                                   
                                   
                              </div>
                              <div id="tot">

                                    <div id="detail-full">
                                          <label id="lb-tot-item">{totalItem}</label>
                                          <label id="lb-v-tot">R$ {valorTotal}</label>
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
  }

  /*

     componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
                  
     }
     componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
           
     }
     */
