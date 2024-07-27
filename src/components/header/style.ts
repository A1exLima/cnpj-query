import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

interface PropsSideBar {
  $toggleSidebar: boolean
}

export const HeaderContainer = styled.header`
  position: sticky;
  width: 100%;
  background: ${({ theme }) => theme['Midnight-Blue']};
  //box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Content = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 1.8rem 4rem;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.8rem 2rem;
  }
`

export const Brand = styled(Link)`
  display: flex;
  align-items: flex-end;

  gap: 1rem;

  > svg {
    margin-bottom: 0.35rem;
    font-size: 4.5rem;
    color: ${({ theme }) => theme['Pale-Silver']};
  }

  > div {
    > h1 {
      font-size: 2rem;
      font-weight: 600;
      font-family: var(--font-Inter);
      color: ${({ theme }) => theme['Pale-Silver']};
    }

    > p {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: var(--font-Roboto);
      color: ${({ theme }) => theme['Morning-Blue']};
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  > ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    > a {
      color: ${({ theme }) => theme['Pale-Silver']};

      &.active {
        color: ${({ theme }) => theme['white-color']};
      }

      > li {
        font-size: 1.8rem;
        font-weight: 500;
        font-family: var(--font-Roboto);
        transition: color 0.4s ease-in-out;

        &:hover {
          color: ${({ theme }) => theme['white-color']};
        }
      }
    }
  }
`

export const SideBar = styled.nav<PropsSideBar>`
  display: flex;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  > svg {
    margin-top: 0.2rem;
    font-size: 4.5rem;
    color: ${({ theme }) => theme['Pale-Silver']};

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme['white-color']};
    }
  }

  > div {
    width: 100%;
    height: calc(100vh - 8.4rem);
    background: ${(props) => props.theme['Dark-Space-Blue']};

    display: ${({ $toggleSidebar }) => ($toggleSidebar ? 'flex' : 'none')};
    align-items: flex-start;
    justify-content: center;
    padding-top: 10rem;

    position: absolute;
    top: 8.4rem;
    left: 0;
    z-index: -1;

    > ul {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      > a {
        color: ${({ theme }) => theme['Pale-Silver']};

        &.active {
          color: ${({ theme }) => theme['white-color']};
        }

        > li {
          font-size: 2.6rem;
          font-weight: 500;
          font-family: var(--font-Roboto);
          transition: color 0.4s ease-in-out;

          &:hover {
            color: ${({ theme }) => theme['white-color']};
          }
        }
      }

      > a:last-child > li {
        margin-left: 0.6rem;
      }
    }
  }
`
