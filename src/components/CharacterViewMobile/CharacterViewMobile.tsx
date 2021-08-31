import './characterViewMobile.css';

const CharacterViewMobile = ({character, isActive} : PropsType) => {
    return (
        <div className={"character-wrapper d-flex" + (isActive ? ' active' : '') }>
            <img src={character.thumbnail} alt="image" className="character-image" />
            <div className="detail-view">
                <label htmlFor="" className="name1">{character.title}</label>
                <label htmlFor="" className="name2">{character.title}</label>
            </div>
        </div>
    )
}

interface PropsType {
    character: any,
    isActive?: boolean
}

export default CharacterViewMobile;