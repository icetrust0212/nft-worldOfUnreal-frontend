import './gmaeCharactersViewDesktop.css';
const GameCharactersViewDesktop = ({ team1, team2 }: PropsType) => {

    const getPosition = (index: number, length: number, teamName: string): string => {
        if (teamName === 'team1') {
            return index > 0 ? 'offset' : '';
        } else {
            return index < length - 1 ? 'offset' : '';
        }
    }

    return (
        <>
            <div className="game-characters-view-desktop" style={{ backgroundImage: 'url(/assets/images/backgrounds/second.svg)' }}>
                <div className="left-section">
                    {
                        team1.map((character: any, index: number) => {
                            return (
                                <div key={index} className={"character-item " + getPosition(index, team1.length, 'team1')} style={{ zIndex: character.order, width: character.width * 20 + 'vw' }}>
                                    <div className="character-name-layout">
                                        <img src={'/assets/images/backgrounds/team1.png'} alt="" className="background" />
                                        <label htmlFor="" className="character-name">{character.title}</label>
                                    </div>
                                    <img src={character.thumbnail} alt="characterImg" className="character-img" />
                                </div>
                            )
                        })
                    }

                </div>
                <div className="middle-section">
                    <img src="/assets/images/backgrounds/second-middle.svg" alt="background" className="background" />
                    <img src="/assets/images/second-middle.png" alt="img" className="logo" />
                    <div className="title-wrapper">
                        <img src="/assets/images/backgrounds/section-middle-text.png" alt="title" />
                        <label htmlFor="" className="title-layout">
                            <span className="title">MEET YOUR</span>
                            <span className="title primary">HEROES!</span></label>
                    </div>
                </div>
                <div className="right-section">
                    {
                        team2.map((character: any, index: number) => {
                            return (
                                <div key={index} className={"character-item " + getPosition(index, team1.length, 'team2')} style={{ zIndex: character.order, width: character.width * 20 + 'vw' }}>
                                    <div className="character-name-layout">
                                        <img src={'/assets/images/backgrounds/team2.png'} alt="" className="background" />
                                        <label htmlFor="" className="character-name">{character.title}</label>
                                    </div>
                                    <img src={character.thumbnail} alt="characterImg" className="character-img" />
                                </div>
                            )
                        })
                    }
                </div>

                <div className="text-layout">
                    <article>
                        From Soldiers, Snipers, Rogues and Engineers, Cosmicrafts heroes are diverse and unique, you will unleash incredible traits and devastating power ups on your way to victory.
                    </article>
                </div>
            </div>
            <div className="game-characters-short-view">
                <div className="left">
                    {
                        team1.map(character => {
                            return (<div className="character-item">
                                <img src={character.short_img} alt="team1" className="chracter-img" />
                            </div>)
                        })
                    }
                </div>
                <div className="center">
                    <img src="/assets/images/craft-2.png" alt="" className="background" />
                    <label>who will you choose</label>
                    <div className="border" style={{borderColor: 'var(--primary-color)'}}></div>
                </div>
                <div className="right">
                    {
                        team2.map(character => {
                            return (<div className="character-item">
                                <img src={character.short_img} alt="team2" className="chracter-img" />
                            </div>)
                        })
                    }
                </div>
            </div>
        </>
    )
}

interface PropsType {
    team1: any[],
    team2: any[]
}

export default GameCharactersViewDesktop;