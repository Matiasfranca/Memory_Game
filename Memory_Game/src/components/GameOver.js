export default function GameOver(props) {
    return (props.gameOver?
        <div className="gameOver">
            <h1>Parabéns por finalizar o jogo</h1>
            <button id="restart" onClick={props.restart}>Jogar novamente</button>
        </div>:<></>
    )
}