import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import './layout.css';

const Layout = (props: PropsType) => {
  return (
    <div className="page-layout"  style={{backgroundImage: 'url(/assets/images/backgrounds/top.svg)'}}>
      <PageHeader />
      <div className="content-wrapper">{props.children}</div>
    </div>
  )
}

interface PropsType {
  children: any
}

export default Layout;