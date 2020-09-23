import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/Header/SubHeader';
import ListItem from '../components/ListItem/ListItem';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const Alert = styled.span`
  width: 100%;
  text-align: center;
`;

const List = ({lists, loading, error, getListsRequest, match, history}) => {
  let [items, setItems] = React.useState([]);
  React.useEffect(() => {
    if (!lists.length) {
      getListsRequest();
    }
    
    if (lists.length) {
      const {items} = lists.find(({id}) => id === parseInt(match.params.id));
      setItems(items);
    }
  }, [lists, getListsRequest, match]);

  return !loading && !error ? (
    <>
      {history && (
        <SubHeader
          goBack={() => history.goBack()}
          openForm={() => history.push(`${match.url}/new`)}
        />
      )}
      <ListItemWrapper>
        {items && items.map((item) => <ListItem key={item.id} data={item} />)}
      </ListItemWrapper>
    </>
  ) : (
    <Alert>{loading ? 'Loading...' : error}</Alert>
  );
};

export default List;
