import React from 'react';

export const ListsContext = React.createContext();

const initialValue = {
  lists: [],
  loading: true,
  error: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_LISTS_SUCCESS':
      return {
        ...state,
        lists: action.payload,
        loading: false,
      };
    case 'GET_LISTS_ERROR':
      return {
        ...state,
        lists: [],
        loading: false,
        error: action.payload,
      };
    case 'ADD_ITEMS_SUCCESS': {
      console.log('state: ', state);
      console.log('action: ', action);
    }
    default:
      return value;
  }
};

function fetchData(dataSource) {
  try {
    const data = require(`${dataSource}`);

    if (data) {
      return {data, error: false};
    }
  } catch (error) {
    return {data: false, error: error.message};
  }
}

function postData(dataSource, content) {
  try {
    localStorage.setItem(dataSource, JSON.stringify(content));

  } catch (error) {
    return {data: false, error: error.message};
  }
}

const ListsContextProvider = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, initialValue);

  const getListsRequest = () => {
    const result = fetchData('./data.json');
    if (result.data && result.data.length) {
      dispatch({type: 'GET_LISTS_SUCCESS', payload: result.data});
    } else {
      dispatch({type: 'GET_LISTS_ERROR', payload: result.error});
    }
  };

  const addItems = data => {
    dispatch({type: 'ADD_ITEMS_SUCCESS', payload: data});
  }

  return (
    <ListsContext.Provider value={{...state, getListsRequest, addItems}}>{children}</ListsContext.Provider>
  );
};
export default ListsContextProvider;
