import React from 'react';
import { connect }from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component';
//simport { firestore } from '../../firebase/firebase.utils';
import {selectCollection} from '../../redux/shop/shop.selectors';
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './collection.styles';



const CollectionPage = ({ collection }) => {
   //clean up method
    // useEffect(()=>{
    //     console.log('I am sucscribing')
    //     const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot))
        
    //     return () =>{
    //         console.log('I am unsubscribing');
    //         unsubscribeFromCollections()
    //     };
   
    // }, [])

    const { title, items } = collection;
     
    return(
        <CollectionPageContainer>
            <CollectionTitle> {title}</CollectionTitle>
            <CollectionItemsContainer>
                { items.map(item => (
                        <CollectionItem key={item.id} item={item}/>
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
}          

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);