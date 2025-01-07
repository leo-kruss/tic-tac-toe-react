import { useState, Fragment } from "react";

export default function Player({ name, symbol }) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(true)
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing) {
        playerName = <input type="text" required></input>
    }

    return (
        <Fragment>
            <li>
                <span className='player'>
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
            </li>
            <button onClick={handleEditClick}>Edit</button>
        </Fragment>
    );
}