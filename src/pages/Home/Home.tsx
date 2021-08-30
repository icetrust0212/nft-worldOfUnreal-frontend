import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Layout/Layout';
import PlayNow from '../../components/PlayNow/PlayNow';
import { useEffect, useState } from 'react';
import { getCharactersByTeam } from '../../store/characters/actions';
import { getTeam1, getTeam2 } from '../../store/characters/reducer';

const Home = (props: any) => {
  const dispatch = useDispatch();
  const team1 = useSelector(state => getTeam1(state));
  const team2 = useSelector(state => getTeam2(state));
  const getPosition = (index: number, length: number, teamName: string): string => {
    if (teamName === 'team1') {
      return index > 0 ? 'offset' : '';
    } else {
      return index < length - 1 ? 'offset' : '';
    }
  }
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
          <img src="/assets/images/second-3.png" alt="second-3" className="second3" />
          <img src="/assets/images/second-4.png" alt="second-4" className="second4 fade" />
        </div>
        <div className="second-section" style={{ backgroundImage: 'url(/assets/images/backgrounds/second.svg)' }}>
          <div className="left-section">
            {
              team1.map((character: any, index: number) => {
                return (
                  <div key={index} className={"character-item " + getPosition(index, team1.length, 'team1')} style={{ zIndex: character.order }}>
                    <div className="character-name-layout">
                      <img src={'/assets/images/backgrounds/team1.png'} alt="" className="background" />
                      <label htmlFor="" className="character-name">{character.title}</label>
                    </div>
                    <img src={character.thumbnail} alt="characterImg" className="character-img" style={{ height: character.height, width: 'auto' }} />
                  </div>
                )
              })
            }

          </div>
          <div className="middle-section" style={{ backgroundImage: 'url(/assets/images/backgrounds/second-middle.svg)' }}>
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
                  <div key={index} className={"character-item " + getPosition(index, team1.length, 'team2')} style={{ zIndex: character.order }}>
                    <div className="character-name-layout">
                      <img src={'/assets/images/backgrounds/team2.png'} alt="" className="background" />
                      <label htmlFor="" className="character-name">{character.title}</label>
                    </div>
                    <img src={character.thumbnail} alt="characterImg" className="character-img" style={{ height: character.height, width: 'auto' }} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home