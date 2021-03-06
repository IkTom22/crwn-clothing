import React, { useEffect }from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import CollectionsPageContainer from '../collection/collection.container'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
//import { fetchCollectionsStatrtAsync } from '../../redux/shop/shop.actions'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


const ShopPage = ({ fetchCollectionsStart, match } ) => {
        useEffect(() => {
            fetchCollectionsStart();
        }, [fetchCollectionsStart]);
      
    return ( 
        <div>
            <Route 
                exact 
                path={`${match.path}`} 
                component = {CollectionsOverviewContainer }
            />
            <Route 
                path={`${match.path}/:collectionId`} 
                component = {CollectionsPageContainer}
            />    
        </div>
    )
   
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())

})
export default connect(null,  mapDispatchToProps)(ShopPage);