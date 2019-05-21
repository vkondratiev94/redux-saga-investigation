import { takeEvery, take, put, call } from 'redux-saga/effects'

function* workerSaga() {
  /**
   * put(action)
   * creates an Effect description that instructs the middleware to dispatch an action to the Store.
   */
  yield put({ type: 'ACTION_FROM_WORKER' })
  console.log(put({ type: 'ACTION_FROM_WORKER' }))
  console.log('Hey from worker')
}

function* byeSaga() {
  console.log('Goodbye!')
}

// watcher saga
function* rootSaga() {
  /** 
   * takeEvery(pattern, saga, ...args) [non-blocking]
   * spawns a `saga` on each action dispatched to the Store that matches `pattern`.
   */
  yield takeEvery('HELLO', workerSaga)



  /**
   * handle actions once and one-by-one [blocking]
   */
  yield take('LOGIN')
  yield call(workerSaga)
  // ... your logic
  yield take('LOGOUT')
  yield call(byeSaga)
}

// watcher saga --> actions --> worker saga

export default rootSaga