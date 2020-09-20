import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    MenuItemContainer,
    ContentContainer,
    BackgroundImage,
    ContentSubTitle,
    ContainerTitle
} from './menu-item.styles';
//import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match  })=>(
    <MenuItemContainer  
        size={size}
        onClick = { ()=> history.push(`${match.url}${linkUrl}`)  }
    >
        <BackgroundImage 
            className='background-image'
            imageUrl={imageUrl}
          />  
        <ContentContainer className='content'>
            <ContainerTitle>{ title.toUpperCase() }</ContainerTitle>
            <ContentSubTitle>SHOP NOW</ContentSubTitle>
        </ContentContainer>
    </MenuItemContainer>    
)
export default withRouter(MenuItem);