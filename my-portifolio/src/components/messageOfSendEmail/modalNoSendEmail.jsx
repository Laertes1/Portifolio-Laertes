import './modalSendMessage.css'
export default function MessageOfSendEmail({setModalClose}) {

    return (
        
        <div class="cardMessageOfSendEmail">
            <div class="headerOfNotSendEmail">
                <div class="imageOfNotSend">
                    
                </div>
                <div class="content">
                    <span class="titleNotSendEmail">O Email não foi enviado</span>
                    <p class="message">Por favor, tente novamente!</p>
                </div>
                <div class="actions">
                    <button class="close" type="button" onClick={()=>setModalClose(false) }>Fechar</button>
                    
                </div>
            <div className="progressBar"></div>
                
            </div>
            
        </div>
        
    );
}