import styled from 'styled-components';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: hsl(0, 0%, 0%);
  font-family: ${props => (props.isBold ? props.theme.fontFamily400 : props.theme.fontFamily200)};
  font-size: ${props => props.styleFontSize};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight400 : props.theme.fontWeight200)};
`;
