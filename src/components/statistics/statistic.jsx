import {Box, Percentage, Title} from "./styles";
import PropTypes from "prop-types";

export const Statistic = ({title, percent, leftRadius, rightRadius}) => {
  return (
      <Box leftRadius={leftRadius} rightRadius={rightRadius} data-testid={title}>
        <Percentage>{percent}</Percentage>
        <Title>{title}</Title>
      </Box>
  )
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  leftRadius: PropTypes.number,
  rightRadius: PropTypes.number,
};

Statistic.defaultProps = {
  leftRadius: 0,
  rightRadius: 0,
};

export default Statistic;