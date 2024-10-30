import styled from 'styled-components/native'
import { color, ColorProps, typography, TypographyProps, space, SpaceProps, flex, FlexProps } from 'styled-system'

const StyledText = styled.Text<ColorProps & TypographyProps & SpaceProps & FlexProps>`
  ${({ theme }) => `
    color:  ${theme.colors.textPrimary};
    font-family: ${theme.fonts.regular};
  `}
  ${color}
  ${typography}
  ${space}
  ${flex}
`

export default StyledText;
