/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, Router } from 'react-router-dom';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Navbar from 'containers/Navbar/Navbar';
import HomePage  from 'containers/HomePage/Loadable';
import { render } from 'react-testing-library';

const AppWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    width: 500px;
    
`;

const PageContainer = styled.div`
  height: 100vh;
`;

const MainPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
`;

export default function App() {
  
    return (
      <PageContainer>
        <Navbar />
      <MainPage>
        <AppWrapper>
          <Helmet
            titleTemplate="%s - React.js Boilerplate"
            defaultTitle="React.js Boilerplate"
          >
          <meta name="description" content="A React.js Boilerplate application" />
          </Helmet>
          
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/login" component={ LoginPage } />
            <Route path="/register" component={ RegisterPage} />
            <Route path="" component={ NotFoundPage } />
          </Switch>
          <GlobalStyle />
        </AppWrapper>
      </MainPage>
      </PageContainer>
    );
  
  
}
