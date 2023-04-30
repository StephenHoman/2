 
import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter';

Enzyme.configure({ adapter: new Adapter() });