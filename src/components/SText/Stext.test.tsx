import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import SText from "./index";

const props = {
    text: "Hi",
    size: 20
};

describe('SText', () => {
  const snapshot = renderer.create(<SText {...props} />).toJSON();
  it('should render', () => {
    expect(snapshot).toMatchSnapshot();
  });
});