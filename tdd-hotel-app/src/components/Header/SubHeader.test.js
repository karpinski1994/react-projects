import React from 'react'
import { shallow } from 'enzyme'
import SubHeader, { Title, SubHeaderButton } from './SubHeader'

describe('the SubHeader component', () => {

  it('should render', () => {
    const component = shallow(<SubHeader />)
    // you can render component at its first level

    expect(component).toMatchSnapshot();
    // expect(1+2).toBe(3);
    // expect(1+2).toBe('3');
  })

  it('should render with a dynamic title', () => {
    const title = 'Test app';
    const component = shallow(<SubHeader title={title} />);
    expect(component.find(Title).text()).toEqual(title);    
  })
  
  it('should render with a btns and handle the onClick event', () => {
    const mockGoBack = jest.fn();
    const mockOpenForm = jest.fn();
    const component = shallow(<SubHeader goBack={mockGoBack} openForm={mockOpenForm}/>)
    expect(component).toMatchSnapshot();
    const goBackBtn = component.find(SubHeaderButton).at(0)
    const openFormBtn = component.find(SubHeaderButton).at(1)
    expect(goBackBtn.exists()).toBe(true);
    expect(openFormBtn.exists()).toBe(true);
    goBackBtn.simulate('click');
    openFormBtn.simulate('click');
    expect(mockGoBack).toHaveBeenCalled();
    expect(mockOpenForm).toHaveBeenCalled();
  })
  
  // it('should render with a Form btn', () => {
  //   const component = shallow(<SubHeader openForm={() => {}}/>)
  //   expect(component).toMatchSnapshot();
  // })

  
})
