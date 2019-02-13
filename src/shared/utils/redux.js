import to from 'await-to-js'
import dayjs from 'dayjs'
import { createAction } from 'redux-actions'

export const getActionTypes = TYPE => ({
  [TYPE + '_STARTED']: TYPE + '_STARTED',
  [TYPE + '_FAILED']: TYPE + '_FAILED',
  [TYPE + '_SUCCEED']: TYPE + '_SUCCEED',
  [TYPE + '_ENDED']: TYPE + '_ENDED'
})

export function createAsyncAction(TYPE, asyncFn) {
  const TYPE_STARTED = TYPE + '_STARTED'
  const TYPE_FAILED = TYPE + '_FAILED'
  const TYPE_SUCCEED = TYPE + '_SUCCEED'
  const TYPE_ENDED = TYPE + '_ENDED'
  const actionCreators = {
    [TYPE_STARTED]: createAction(TYPE_STARTED),
    [TYPE_FAILED]: createAction(TYPE_FAILED),
    [TYPE_SUCCEED]: createAction(TYPE_SUCCEED),
    [TYPE_ENDED]: createAction(TYPE_ENDED)
  }
  function create(...args) {
    return async (dispatch, getState) => {
      const startedAt = dayjs()
      dispatch(actionCreators[TYPE_STARTED]({ startedAt, value: { ...args } }))
      const [err, result] = await to(asyncFn(...args, dispatch, getState))
      if (err) {
        dispatch(
          actionCreators[TYPE_FAILED]({
            errorMessage: error.message
          })
        )
        throw error
      }
      dispatch(actionCreators[TYPE_SUCCEED](result))
      const endedAt = dayjs()
      dispatch(
        actionCreators[TYPE_ENDED]({
          endedAt: endedAt,
          elapsed: endedAt - startedAt
        })
      )
      return result
    }
  }
  Object.assign(create, {
    TYPE,
    STARTED: TYPE_STARTED,
    FAILED: TYPE_FAILED,
    SUCCEED: TYPE_SUCCEED
  })
  return create
}
