import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  // it('should render button', () => {
  //   shallow(<Button />)
  //   
  //   expect(component).toMatchSnapshot();
  // })
  
  it('should render correct children', () => {
    const children = 'Some text';
    const component = shallow(<Button>{children}</Button>)
    
    expect(component.props().children).toBe(children);
  })

  it('should handle onClick event', () => {
    const mockOnClick = jest.fn();
    const component = shallow(<Button onClick={mockOnClick} />)
    component.simulate('click');
    expect(mockOnClick).toHaveBeenCalled();

  })
  
  
})
