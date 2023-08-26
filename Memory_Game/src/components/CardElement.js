export default function CardElement(props) {
    return(
        <div onClick={()=>{props.handleFlip(props.card)}} id={props.card.id} className={`card ${props.card.flipped?"flip":""}`}>
            <div class="card_Front">
                <img src={`./images/${props.card.symbol}.png`}></img>
            </div>

            <div class="card_Back">
                <img src={`./images/pngwing.com.png`}></img>
            </div>
        </div>
    )
}