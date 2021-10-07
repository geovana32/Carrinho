import Cookie from 'js-cookie' 
import { UseStates } from 'react'; 

import Contador from '../contador'
import { Cotainer, RemoverIcon } from './styled' 

 
export default function CarrinhoItem(props) { 
      // Carrega a Variável de Estado com o parâmetro recebido da tela Carrinho 
       const [ produto, setProduto] = useStates(props.info);  


       function alterarQtd(qtd) { 
           // Atuliza a variável de Estado 
           setProduto ({...produto, qtd }); 

            // Chama componente PAI para atualizar Cookie 
             props.onUpdate(produto.id, qtd)
          }  

          function remover() {
              props.onRemove(produto.id);  
          }
    

          return ( 
              <Container> 
               
               <div> 
                   <img className= "capa" src={produro.imagem} alt="" /> 
                   <Contador onChange={alterarQtd} value={produto.qtd} /> 
               </div>  
                
                  <div className="titulo"> 
                   {produto.titulo}
                    </div> 
                     
                     <div className="preco"> 
                     <span>Preço unitário</span> <br /> 
                      {produto.preco}
                     </div>   
                      
                       <div className="remover"> <RemoverIcon onClick={remover} /> </div>
                     </Container>
                      )
                  }