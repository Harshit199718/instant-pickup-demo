import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import logo from './content-constants/images/logotype_2.png'

import './App.scss'

import Navigation from './components/Navigation'
import MainPage from './components/MainPage'
import SelectProperty from './components/OrderSteps/SelectPropertyStep'
import FewSelect from './components/OrderSteps/FewSelect'
import SelectInventory from './components/OrderSteps/SecondStep'
import PickDate from './components/OrderSteps/ThirdStep'
import GetPrice from './components/OrderSteps/FourthStep'
import Payment from './components/OrderSteps/Payment'
import BecomeDriver from './components/BecomeDriver'
import BDOne from './components/BecomeDriver/Step1'
import BDTwo from './components/BecomeDriver/Step2'
import Blog from './components/Blog'
// import AboutUs from './components/MainPage/AboutUs/about-us'

function App(props) {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="wrapper-header">
            <div className="logo">
              <img src={logo} alt="logotype" />
            </div>
            <Navigation />
          </div>
        </header>
        <div className="section">
          <Switch>
            <Route exact path="/" render={() => <MainPage />} />
            <Route
              exact
              path="/select-property"
              render={() => <SelectProperty />}
            />
            <Route exact path="/few-select" render={() => <FewSelect />} />
            <Route
              exact
              path="/select-inventory"
              render={() => <SelectInventory />}
            />
            <Route exact path="/pick-date" render={() => <PickDate />} />
            <Route exact path="/get-price" render={() => <GetPrice />} />
            <Route exact path="/confirm-payment" render={() => <Payment />} />
            <Route exact path="/blog" render={() => <Blog />} />
            <Route
              exact
              path="/become-a-partner"
              render={() => <BecomeDriver />}
            />
            <Route
              exact
              path="/become-a-partner-step-one"
              render={() => <BDOne />}
            />
            <Route
              exact
              path="/become-a-partner-step-two"
              render={() => <BDTwo />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
