import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import SIcons from "./index";

const props = {
    name: "remove",
    size: 32,
};

describe('SIcons', () => {
  it('should render', () => {
    const snapshot = renderer.create(<SIcons {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});