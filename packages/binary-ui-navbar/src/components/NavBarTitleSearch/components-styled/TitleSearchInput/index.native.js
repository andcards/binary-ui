import styled from 'styled-components';

export default styled.TextInput`
  flex: 1;

  color: hsl(0, 0%, 0%);
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  letter-spacing: ${props => (props.isBold ? 2 : 0)};
`;
