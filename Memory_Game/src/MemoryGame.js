import React, { useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import game from "./game/game";

export default function MemoryGame(){
    const [gameOver, setgameOver] = useState(false);
    const [card, setCard] = useState([])
    useEffect(()=>{
        setCard(game.createCards())
    },[])

    function restart(){
        setCard(game.createCards())
        setgameOver(false);
    }

    function handleFlip(card) {
        game.checkCards(card, ()=>{setCard([...game.cards])}, ()=>{setgameOver(true)})
    }

    return(
        <div>
            <GameBoard handleFlip={handleFlip} card={card}></GameBoard>
            <GameOver gameOver={gameOver} restart={restart}></GameOver>
        </div>
    )
}