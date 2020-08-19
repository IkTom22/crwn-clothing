import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

// no state or lifesycle methods so just function base component
const HomePage = ()=>(
   <div className='homepage'>
        <Directory  />
   </div>
)
export default HomePage;