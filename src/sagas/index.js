import { takeEvery, put } from 'redux-saga/effects'

function* workerSaga() {
  console.log('Hey from worker')
  /**
   * put(action)
   * creates an Effect description that instructs the middleware to dispatch an action to the Store.
   */
  yield put({ type: 'ACTION_FROM_WORKER' })
  console.log(put({ type: 'ACTION_FROM_WORKER' }))
}

// watcher saga
function* rootSaga() {
  /** 
   * takeEvery(pattern, saga, ...args)
   * spawns a `saga` on each action dispatched to the Store that matches `pattern`.
   */
  yield takeEvery('HELLO', workerSaga)
}

// watcher saga --> actions --> worker saga

export default rootSaga