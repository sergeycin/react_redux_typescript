export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;

}
export enum UserActionTypes{
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
interface FetchUserSuccesAction{
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}
interface FetchUserErrorAction{
    type:  UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
interface FetchUserAction{
    type: UserActionTypes.FETCH_USERS;
  
   
}

export type UserAction = FetchUserAction | FetchUserErrorAction | FetchUserSuccesAction