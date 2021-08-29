import { Row } from 'react-bootstrap';
import './leftHeader.css';
const LeftHeader = (props: PropsType) => {
    return (
        <div className="left-pageHeader-wrapper d-flex" style={{backgroundImage: "url(/assets/images/backgrounds/left-header.png)"}}>
            <img src="/assets/images/craft-2.png" className="logo-img" alt="craft-2" />
            <img src="/assets/images/text-2.png" className="logo-title" alt="text-2" />
        </div>
    )
}
interface PropsType {

}

export default LeftHeader;