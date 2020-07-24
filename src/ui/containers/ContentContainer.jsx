import React from 'react';
import Helmet from 'react-helmet';
import MainContainer from './MainContainer';
import FooterContainer from './AppFooter';

const ContentContainer = () => {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        <MainContainer />
        <FooterContainer />
     
        <Helmet>
          <script type="text/javascript" src="/src/ui/assets/js/sb-admin-2.js" />
        </Helmet>
      </div>
    )
}

export default ContentContainer;
