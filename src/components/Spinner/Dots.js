import { ThreeDots } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Dots = ({ width, height, color }) => (
  <ThreeDots
    height={height}
    width={width}
    radius="9"
    color={color}
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

Dots.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};