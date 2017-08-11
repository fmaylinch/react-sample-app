import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Search from './Search';
import MovieCard from './MovieCard';
import shows from './shows.json'

// required dependencies: yarn add enzyme react-test-renderer
// run tests: yarn test
// show coverage: yarn test -- --coverage
// see report: open coverage/lcov-report/index.html

describe('Search', () => {

  it('renders correctly (shallow)', () => {
    const component = shallow(<Search />)
    // compares render to last snapshot (ignoring children, due to shallow)
    expect(component).toMatchSnapshot()
  })

  // Excluded test
  xit('renders correctly (complete)', () => {
    const component = renderer.create(<Search />)
    const tree = component.toJSON()
    // compares render to last snapshot (including children)
    expect(tree).toMatchSnapshot()
  })

  it('displays the correct number of results (unfiltered)', () => {
    const component = shallow(<Search />)
    const movieCards = component.find(MovieCard) // finds by component
    expect(movieCards.length).toEqual(shows.length);
  })

  it('displays the correct number of results (filtered)', () => {
    const searchTerm = 'black'
    const expectedCount = 2
    const component = shallow(<Search />)
    const input = component.find('input') // finds by css selector
    input.simulate('change', {target: {value: searchTerm}}) // simulates a change event, setting 'black' in the input
    const movieCards = component.find(MovieCard)
    expect(movieCards.length).toEqual(expectedCount)
  })

})
