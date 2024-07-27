import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 4rem;

  > nav {
    > ul {
      display: flex;
      gap: 2rem;

      > a {
        font-size: 1.2rem;
      }
    }
  }
`
