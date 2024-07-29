import Statistic from "./statistic";
import {render, screen} from "@testing-library/react";
import {mockLinesSaved, mockUploadSucess} from "../../mock/dataset";

test(`should render component ${Statistic.name}`, () => {
  const {title, percent, leftRadius, rightRadius} = mockUploadSucess;
  render(<Statistic title={title} percent={percent} leftRadius={leftRadius} rightRadius={rightRadius} />);

  expect(screen.getByTestId(title)).toBeTruthy();
});

test('should render file upload percent success correctly', () => {
  const {title, percent, leftRadius, rightRadius} = mockUploadSucess;
  render(<Statistic title={title} percent={percent} leftRadius={leftRadius} rightRadius={rightRadius} />);

  expect(screen.getByTestId(title)).toBeTruthy();
  const statisticElement = screen.getByTestId(title);
  expect(statisticElement).toBeInTheDocument();
  expect(statisticElement).toHaveTextContent(percent);
  expect(statisticElement).toHaveTextContent(title);
});

test('should render percent of lines saved correctly', () => {
  const {title, percent, leftRadius, rightRadius} = mockLinesSaved;
  render(<Statistic title={title} percent={percent} leftRadius={leftRadius} rightRadius={rightRadius} />);

  expect(screen.getByTestId(title)).toBeTruthy();
  const statisticElement = screen.getByTestId(title);
  expect(statisticElement).toBeInTheDocument();
  expect(statisticElement).toHaveTextContent(percent);
  expect(statisticElement).toHaveTextContent(title);
});