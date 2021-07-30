import expect from 'expect';
import React from 'react';
import { shallow, configure  } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HammingGraph from './HammingGraph';

configure({adapter: new Adapter()});

// Unit test to validate computation hamming distance
describe('<HammingGraph', () => {
    const component = shallow(<HammingGraph/>).instance();
    it('Single pair hamming distance', () => {
        expect(
            component.getHammingDistances([111, 222])
        ).toEqual([3]);
    });

    it('Empty input hamming distance', () => {
        expect(
            component.getHammingDistances(null)
        ).toEqual([]);
    });

    it('Multiple input pairs hamming distance', () => {
        expect(
            component.getHammingDistances([123, 456, 156, 156])
        ).toEqual([3, 2, 2, 1, 1, 0]);
    });
});