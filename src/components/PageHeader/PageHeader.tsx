import CenterHeader from "../CenterHeader/CenterHeader";
import LeftHeader from "../LeftHeader/LeftHeader";
import RightHeader from "../RightHeader/RightHeader";
import "./pageHeader.css";
const PageHeader = () => {
  return (
    <div className="page-header-wrapper" >
      <div className="left-wrapper">
        <LeftHeader/>
      </div>
      <div className="center-wrapper" >
        <CenterHeader />
      </div>
      <div className="right-wrapper">
        <RightHeader />
      </div>
          
    </div>
  )
}

export default PageHeader;