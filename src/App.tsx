import { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import guestRoutes from './routes/guest'
import './App.css'
import { useDispatch } from 'react-redux'
//@ts-ignore
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
//@ts-ignore
import Splash from './components/Splash/Splash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'

const App = (props: any) => {
  const routes = guestRoutes;
  const history = useHistory();
  const dispatch = useDispatch();
  const [isSplash, setIsSplash] = useState(false);
  
  const location = useLocation();
  const routingComponent = (
    <div className="custom-container">
      <Switch

        location={location}
      >
        {routes.map((route: any, index: any) => {
          return (
            <Route
              key={index}
              path={route.path}
              component={() => <route.component {...props} handleNotification={handleNotification} routes={routes} />}
              exact={route.exact}
            />
          )
        })}
      </Switch>
    </div>
  )

  const handleNotification = (type: "success" | "warning" | "info" | "error", title: string, msg: string) => {
    let duration = 3000;
    switch (type) {
      case 'info':
        NotificationManager.info(msg, title, duration);
        break;
      case 'success':
        NotificationManager.success(msg, title, duration);
        break;
      case 'warning':
        NotificationManager.warning(msg, title, duration);
        break;
      case 'error':
        NotificationManager.error(msg, title, duration);
        break;
    };
  };

  return (
    <>
      {
        isSplash &&
        <Splash
          text="Project Name"
          src='/assets/images/logo.png'
          style={{ height: '100vh' }}
        />
      }

      {
        !isSplash &&
        <>
          {
            routingComponent
          }

          <NotificationContainer />
        </>
      }

    </>
  )
}

export default App
