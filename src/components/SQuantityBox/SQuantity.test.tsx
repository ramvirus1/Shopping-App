import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import SQuantity from "./index";

const props = {
    quantity: 0,
    onQuantityUpdate: (quantity: number) => {}
};

describe('SQuantity', () => {
  const snapshot = renderer.create(<SQuantity {...props} />).toJSON();
  it('should render', () => {
    expect(snapshot).toMatchSnapshot();
  });
});