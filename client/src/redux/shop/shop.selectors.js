import memoize from 'lodash.memoize';
import { createSelector} from 'reselect';

// const COLLECTION_ID_MAP = {
//     hats: 1, 
//     sneakers: 2, 
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }
const selectShop = state => state.shop;


export const selectCollections= createSelector(
    [selectShop],
    shop=> shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ?  Object.keys(collections).map(key => collections[key]) : []
)
// export const selectCollection = memoize(collectionUrlParam =>
//     createSelector(
//         [selectCollections],
//         (collections) => 
//             collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
//     )
// );
export const selectCollection = memoize((collectionUrlParam) => 
     createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
)

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

//!!0 (returns false), !!'' ( false), !!null (false), but, !!{} returns true
export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)