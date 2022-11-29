import React, {useContext} from "react";
import {AppContext} from '../App';


function Letter({attemptVal, letterPos}){
    const {board} = useContext(AppContext);
    const letter = board[attemptVal][letterPos]
    return(
        <div className="letter">
            {letter}
        </div>
    )
}

export default Letter;