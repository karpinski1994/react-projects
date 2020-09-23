import React from 'react';
import styled from 'styled-components';
import SubHeader from '../components/Header/SubHeader';
import FormItem from '../components/FormItem/FormItem';
import Button from '../components/Button/Button';

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

const formConfig = [
  {id: 'title', label: 'Title', type: 'text', placeholder: 'Ex. Computer'},
  {id: 'quantity', label: 'Quantity', type: 'number', placeholder: '0'},
  {id: 'price', label: 'Price', type: 'number', placeholder: '0.00'},
];

const Form = ({addItems, match, history}) => {
  const [itemData, setItemData] = React.useState({
    title: '',
    quantity: '',
    price: '',
  });
  const handleOnClick = (e) => {
    e.preventDefault();
    const {id} = match.params;
    addItems({id, itemData});
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setItemData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {history && (
        <SubHeader goBack={() => history.goBack()} title={`Add Item`} />
      )}
      <FormWrapper>
        <form>
          {formConfig.map((item) => (
            <FormItem
              key={item.id}
              handleOnChange={handleChange}
              id={item.id}
              type={item.type}
              label={item.label}
              placeholder={item.placeholder}
            />
          ))}

          <SubmitButton onClick={handleOnClick}>
            Add Item
          </SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
};

export default Form;
