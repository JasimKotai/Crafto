import {User_Name, User_Profile} from './ActionTypes';

const initialState = {
  data: [],
};

export const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case User_Name:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

const initialState2 = {
  profile: [],
};

export const UserProfileReducer = (state = initialState2, action) => {
  switch (action.type) {
    case User_Profile:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
