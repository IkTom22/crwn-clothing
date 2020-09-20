import React from 'react';
import Directory from '../../components/directory/directory.component';

import {HomePageContainer} from './homepage.styles';


// no state or lifesycle methods so just function base component
const HomePage = ()=>(
   <HomePageContainer>
        <Directory  />
   </HomePageContainer>
)
export default HomePage;