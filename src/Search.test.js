import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'; // not used, actually
import Search from './Search';

it('renders correctly (shallow)', () => {
  const component = shallow(<Search />)
  expect(component).toMatchSnapshot()
});


xit('renders correctly (complete)', () => {
  const component = renderer.create(<Search />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
});
