import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom';
import Hotels, {Alert, HotelItemsWrapper} from './Hotels'
import HotelItem, {Title} from './HotelItem'

describe('the <Hotels /> component', () => {
  let useContextMock;

  beforeEach(() => {
    useContextMock = React.useContext = jest.fn();
  })

  afterEach(() => {
    useContextMock.mockReset();
  })

  it('should handle the first mount', () => {
    const mockContext = {
      loading: true,
      error: '',
      hotels: [],
      getHotelsRequest: jest.fn(),
    }

    useContextMock.mockReturnValue(mockContext);
    const wrapper = mount(<Hotels />);

    expect(mockContext.getHotelsRequest).toHaveBeenCalled();

    const alertComponent = wrapper.find(Alert);
    expect(alertComponent.text()).toBe('Loading...');
  })

  it('should render the list of hotels', () => {
    const mockContext = {
      loading: false,
      error: '',
      hotels: [
        {
          id: 123,
          title: 'Test Hotel',
          thumbnail: 'test.jpg'
        }
      ],
      getHotelsRequest: jest.fn(),
    }

    useContextMock.mockReturnValue(mockContext);
    const wrapper = mount(<Router><Hotels /></Router>);

    expect(wrapper.find(HotelItemsWrapper).exists()).toBe(true)

    const hotelComponent = wrapper.find(HotelItem);
    expect(hotelComponent.exists()).toBe(true);
    expect(hotelComponent.at(0).find(Title).text()).toBe(mockContext.hotels[0].title);
  })
  
  
})
