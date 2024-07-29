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

Statistic.prototype = {
  title: PropTypes.string.isRequired,
  percent: PropTypes.string.isRequired,
  leftRadius: PropTypes.number,
  rightRadius: PropTypes.number,
}

export default Statistic;