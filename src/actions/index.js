/* @flow */
/*global setTimeout*/

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const requestData = (): Object => {
  return {
    type: REQUEST_DATA
  };
};

export const receiveData = (data: Object): Object => {
  return {
    type: RECEIVE_DATA,
    data
  };
};

export const fetchData = (query): Function => {
  return (dispatch) => {
    dispatch(requestData());
    fetch("http://api.walmartlabs.com/v1/search?query="+query+"&format=json&apiKey=t82fz3csqyab44e2yhch32k8")
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        dispatch(receiveData(json));
      }).catch(function(err) {
        dispatch(requestError(err));
      })
  };
};
