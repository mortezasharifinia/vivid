export type GlowingButtonProps = {
  // text of the button
  text: string;
  // Callback fired when click on the button.
  handleClick: () => void;
};

export type StyledGlowingButtonProps = {
  // width of the button
  width?: string;
  // height of the button
  height?: string;
  // background color of the button
  bgColor?: string;
  // change background color of the button during hover
  changedBgColor?: string;
  // letter spacing of the text button
  letterSpacing?: string;
  // font size of the text button
  fontSize?: string;
  // font family of the text button
  fontFamily?: string;
}
