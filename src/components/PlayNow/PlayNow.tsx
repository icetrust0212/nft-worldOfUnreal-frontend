import './playNow.css';

const PlayNow = () => {
    return (
        <div className="play-now-wrapper">
            <img src="/assets/images/play_now.png" alt="background" className="background-img" />
            <img src="/assets/images/craft-2.png" alt="logo" className="logo" />
            <img src="/assets/images/text-2.png" alt="logo-text" className="logo-text" />
            <div className="text-wrapper">
                <h3 className="title">The First</h3>
                <label className="description">real-Time strategy CROSS-PLATFORM GAME</label>
                <h3 className="title">on the blockchain</h3>
            </div>
            <img className="play-button" src='/assets/images/play_button.png' />
        </div>
    )
}

export default PlayNow;