export type SwipeButtonProps = {
  // text of the button
  text: string;
  // icon of the swipe
  icon?: string;
  // Callback fired when click on the button.
  handleClick: () => void;
};

export type StyledSwipeButtonProps = {
  // width of the button
  width?: string;
  // height of the button
  height?: string;
  // background color of the button
  bgColor?: string;
  // text color of the button
  color?: string;
  // background color of the swipe
  swipeBgColor?: string;
  // icon color of the swipe
  swipeIconColor?: string;
  // letter spacing of the text button
  letterSpacing?: string;
  // font family of the text button
  fontFamily?: string;
}
