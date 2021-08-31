import { Row } from 'react-bootstrap';
import './leftHeader.css';
const LeftHeader = (props: PropsType) => {
    return (
        <div className="left-pageHeader-wrapper d-flex">
            <img src="/assets/images/backgrounds/left-header.png" className="background" alt="background" />
            <div className="content-wrapper">
                <div className="logo-wrapper">
                    <img src="/assets/images/craft-2.png" className="logo-img" alt="craft-2" />
                </div>
                <div className="logo-title-wrapper">
                    <img src="/assets/images/text-2.png" className="logo-title" alt="text-2" />
                </div>
            </div>
        </div>
    )
}
interface PropsType {

}

export default LeftHeader;