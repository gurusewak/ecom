import {takeLatest,call,put} from 'redux-saga/effects'
import { firestore ,convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils';
import { fetchCollectionFailure,fetchCollectionSuccess } from './shop-action';
import { shopActionTypes } from './shop-type'

export  function* fetchCollectionAsync() {
  try{
    const collectionRef = yield firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch(error){
    yield put(fetchCollectionFailure(error.message));
  }
}

export  function* fetchCollectionStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionAsync
    )
}
