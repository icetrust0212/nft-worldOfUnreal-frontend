import './rightHeader.css';

const RightHeader = (props: PropsType) => {
    return (
        <div className="right-pageHeader-wrapper d-flex">
            <img src="/assets/images/backgrounds/right-header.png" alt="" className="background" />
            <div className="content-wrapper">
                <img src="/assets/images/right-1.png" className="logo-img" alt="right-1" />
                <button className="btn header-connect">Connect</button>
                <img className="setting" src="/assets/images/setting.png"/>
                <img src="/assets/images/user.png" className="avatar" alt="avatar" />
            </div>
        </div>
    )
}
interface PropsType {

}

export default RightHeader;