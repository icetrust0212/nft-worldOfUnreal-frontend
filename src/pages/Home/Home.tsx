import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import PlayNow from '../../components/PlayNow/PlayNow';
import { useEffect, useState } from 'react';
import { getCharactersByTeam } from '../../store/characters/actions';
import { getTeam1, getTeam2 } from '../../store/characters/reducer';
import GameCharactersViewDesktop from '../../components/GameCharactersViewDesktop/GameCharactersViewDesktop';
import { articles } from '../../static/articles';
import Article from '../../components/Article/Article';
import Footer from '../../components/Footer/Footer';

const Home = (props: any) => {
  const dispatch = useDispatch();
  const team1 = useSelector(state => getTeam1(state));
  const team2 = useSelector(state => getTeam2(state));
  
  useEffect(() => {
    dispatch(getCharactersByTeam('Team1'));
    dispatch(getCharactersByTeam('Team2'));
  }, [])
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
          <img src="/assets/images/craft-2.png" alt="craft" className="fade background-img" />
          <img src="/assets/images/second-1.png" alt="second-1" className="second1 fade" />
          <img src="/assets/images/second-2.png" alt="second-2" className="second2" />
          <h3 className="title">GET ON THE SHIP!</h3>
          <div className="border mb-2" style={{backgroundColor:'#FF8A00'}}></div>
          <img src="/assets/images/second-3.png" alt="second-3" className="second3" />
          <img src="/assets/images/second-4.png" alt="second-4" className="second4 fade" />
        </div>

        <div className="second-section" >
          {
            team1 && team2 &&
            <GameCharactersViewDesktop team1={team1} team2={team2}/>
          }
         </div>
         <div className="third-section" style={{backgroundImage: 'url(/assets/images/backgrounds/third.svg)'}}>
           <div className="main">
             <img src="/assets/images/rocket.png" alt="roket" />
           </div>
           <div className="others">
              <div className="text-layout">
                <label htmlFor="" className="text">In a colorful multiverse of endless combinations</label>
              </div>
              <img src="/assets/images/rocket2.png" alt="rocket" className="img1" />
              <img src="/assets/images/text-2.png" alt="rocket" className="img2" />
              <img src="/assets/images/anna.png" alt="anna" className="img3" />
           </div>
         </div>
         <div className="middle-bar">
          <img src="/assets/images/craft-2.png" alt="craft" className="fade background-img" />
          <img src="/assets/images/third1.png" alt="second-1" className="second1 fade" />
          <img src="/assets/images/third2.png" alt="second-2" className="second2 bottom-offset" />
          <h3 className="title">FREE TO PLAY<br /> PLAY TO EARN!</h3>
          <div className="border" style={{backgroundColor: 'var(--secondary-color)'}}></div>
          <img src="/assets/images/third3.png" alt="second-3" className="second3 bottom-offset" />
          <img src="/assets/images/third4.png" alt="second-4" className="second4 fade" />
        </div>
        <div className="fourth-section" style={{backgroundImage:'url(/assets/images/backgrounds/fourth.svg)'}}>
          <img src="/assets/images/fourth.png" alt="fourth" className="background" />
          {
            articles.map((article, index) => (
              <div className="article-wrapper">
                <Article article={article} key={index}/>
              </div>
            ))
          }
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default Home