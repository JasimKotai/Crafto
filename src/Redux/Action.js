import {User_Name, User_Profile} from './ActionTypes';

export const AddUserData = data => ({
  type: User_Name,
  payload: data,
});

export const SaveUserProfile = profilePic => ({
  type: User_Profile,
  payload: profilePic,
});
