import React from 'react';
import { connect } from 'react-redux';

//import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import {
    CollectionITemContainer, 
    CollectionFooterContainer, 
    ItemImage, 
    FooterName, 
    FooterPrice,
    AddButton
} from './collection-item.styles';
//import './collecton-item.styles.scss';
;

const CollectionItem = ( { item, addItem} ) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionITemContainer>
            <ItemImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer >
                <FooterName> { name }</FooterName>
                <FooterPrice> { price }</FooterPrice>
            </CollectionFooterContainer>
            
            <AddButton onClick={() => addItem(item)}  inverted>Add to cart</AddButton>   
        </CollectionITemContainer>  
    )
        }
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);