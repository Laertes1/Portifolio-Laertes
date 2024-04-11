import './modalSendMessage.css'
export default function MessageOfSendEmail({setModalClose}) {

    return (
        
        <div class="cardMessageOfSendEmail">
            <div class="header">
                <div class="image">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div class="content">
                    <span class="titleSendEmail">Email enviado</span>
                    <p class="message">Obrigado, logo entrarei em contato!!</p>
                </div>
                <div class="actions">
                    <button class="close" type="button" onClick={()=>setModalClose(false) }>Fechar</button>
                    
                </div>
            <div className="progressBar"></div>
                
            </div>
            
        </div>
        
    );
}