import { takeEvery, select, call, put } from 'redux-saga/effects'

import { IMAGES } from '../constants'
import { fetchImages } from '../services/api'
import { setImages, setError } from '../actions'

const getPage = state => state.nextPage

// worker
function* handleImagesLoad() {
  /**
   * select(selector, ...args)
   * Creates an effect that instructs the middleware 
   * to invoke the provided selector on the current Store's state.
   */
  try {
    const page = yield select(getPage)
    const images = yield call(fetchImages, page)
    yield put(setImages(images))
  } catch (err) {
    yield put(setError(err.toString()))
  }
}

// watcher
export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad)
}