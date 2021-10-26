import React from 'react';
import {Col} from 'reactstrap';
import { Image } from '@ui/components/atoms';
import Loader from '@ui/assets/img/loading.gif';

const AppLoader = () => {
  return (
    <Col lg='12' md='12' sm='12' className='app-loader-back'>
      <center>
        <Image imageUrl={Loader} altText='loader' width='20%' className='app-loader' />
      </center>
    </Col>
  );
};

export default AppLoader;