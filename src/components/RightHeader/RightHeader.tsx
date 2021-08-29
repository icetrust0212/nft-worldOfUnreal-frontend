import './rightHeader.css';

const RightHeader = (props: PropsType) => {
    return (
        <div className="right-pageHeader-wrapper d-flex" style={{ backgroundImage: "url(/assets/images/backgrounds/right-header.png)" }}>
            <img src="/assets/images/right-1.png" className="logo-img" alt="right-1" />
            <img src="/assets/images/header-divider.png" className="divider" alt="right-1" />
            <button className="btn header-connect">Connect</button>
            <img src="/assets/images/user.png" className="avatar" alt="avatar" />
        </div>
    )
}
interface PropsType {

}

export default RightHeader;