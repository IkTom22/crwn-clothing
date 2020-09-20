import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectDirectorySections } from '../../redux/directory/directory.selectors';
//import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';
import {DirectoryMenu} from './directory.styles';
const  Directory = ({sections}) =>  (
  <DirectoryMenu >
    {
      sections.map( ({id, ...sectionProps})=> (
          <MenuItem  key={id}  {...sectionProps}/>
      ))
    }
  </DirectoryMenu>
)
     
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections

})


  

export default connect(mapStateToProps)(Directory);