import { useState, Fragment } from "react";

export default function Player({ name, symbol }) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing(!isEditing)
    }

    let playerName = <span className="player-name">{name}</span>;
    //let buttonCaption = 'Edit';

    if (isEditing) {
        playerName = <input type="text" required value={name}/>
        //buttonCaption = 'Save';
    }

    return (
        <Fragment>
            <li>
                <span className='player'>
                    {playerName}
                    <span className="player-symbol">{symbol}</span>
                </span>
            </li>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </Fragment>
    );
}