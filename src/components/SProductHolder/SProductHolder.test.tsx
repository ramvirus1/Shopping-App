import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import SProductholder from "./index";

const props = {
    item: {
        "id": 1,
        "colour": "Black",
        "name": "Black Sheet Strappy Textured Glitter Bodycon Dress",
        "price": 10,
        "img": "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024"
    },
    onSelection: (value) => {}
};

describe('SProductholder', () => {
  const snapshot = renderer.create(<SProductholder {...props} />).toJSON();
  it('should render', () => {
    expect(snapshot).toMatchSnapshot();
  });
});