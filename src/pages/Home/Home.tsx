import './home.css'
import { useDispatch } from 'react-redux';
import Layout from '../Layout/Layout';
import PlayNow from '../../components/PlayNow/PlayNow';

const Home = (props: any) => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="wrapper">
        <div className="first-section">
          <div className="play-now">
            <PlayNow></PlayNow>
          </div>
          <img src="/assets/images/top1.png" alt="top1" className="top1" />
          <img src="/assets/images/top2.png" alt="top2" className="top2" />
        </div>
        <div className="middle-bar">
          <img src="/assets/images/craft-2.png" alt="craft" className="fade background-img"/>
          <img src="/assets/images/second-1.png" alt="second-1" className="second1 fade" />
          <img src="/assets/images/second-2.png" alt="second-2" className="second2" />
          <h3 className="title">GET ON THE SHIP!</h3>
          <img src="/assets/images/second-3.png" alt="second-3" className="second3" />
          <img src="/assets/images/second-4.png" alt="second-4" className="second4 fade" />
        </div>
      </div>
    </Layout>
  )
}

export default Home