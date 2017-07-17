import { Action, Reducer } from 'redux'
// import * as update from 'immutability-helper'

export interface TestState {
  value: number,
}

export const initialState: TestState = {
  value: 0,
}

export enum TestActionTypes {
  TEST = 'TEST.TEST',
}

export interface TestAction extends Action {
  type    : TestActionTypes,
  payload : any,
}

export interface TestReducer<T> extends Reducer<T> {
  (State: TestState, Action: TestAction ): TestState
}

const testReducer: TestReducer<TestState> = (state: TestState = initialState, action: TestAction): TestState => {

  const { type } = action

  switch (type) {
    default:
      return state
  }
}

export default testReducer
