import {takeLatest, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccsess,
    fetchCollectionsFailure
} from './shop.actions';

//saga
export function* fetchCollectionsAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const  snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccsess(collectionsMap));
    } catch(error){
        yield put(fetchCollectionsFailure(error.messge))
    }

}
export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}