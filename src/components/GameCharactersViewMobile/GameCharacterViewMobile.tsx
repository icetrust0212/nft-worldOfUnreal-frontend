import { useState } from 'react';
import CharacterViewMobile from '../CharacterViewMobile/CharacterViewMobile';
import './gameCharactersViewMobile.css';

const GameCharactersViewMobile = ({ characters }: PropsType) => {
    const [activeId, setActiveId] = useState(1);

    return (
        <>
            {
                <ul className="character-list list-unstyled">
                    {
                        characters.map(character => (
                            <li className="character-item" onMouseOver={() => setActiveId(character.id)}>
                                <CharacterViewMobile character={character} isActive={activeId === character.id} />
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    )
}

interface PropsType {
    characters: any[]
}

export default GameCharactersViewMobile;