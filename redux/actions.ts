import axios from 'axios';
import { Dispatch } from 'redux';

export const getPosts = (pageNumber:number) => (dispatch:Dispatch) => {
  axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNumber}`)
    .then((res: any) => {
      console.log("action", res);
      dispatch({
        type: 'GET_POSTS',
        payload: res.data.hits
    })
  })
}