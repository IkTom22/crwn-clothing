import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import CollectionsPageContainer from '../collection/colection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { fetchCollectionsStatrtAsync } from '../../redux/shop/shop.actions'


class ShopPage extends React.Component {

    componentDidMount(){

        const { fetchCollectionsStatrtAsync} = this.props;
        fetchCollectionsStatrtAsync()
    }


   render(){
       const {match } = this.props;
      
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
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStatrtAsync: () => dispatch(fetchCollectionsStatrtAsync())

})
export default connect(null,  mapDispatchToProps)(ShopPage);