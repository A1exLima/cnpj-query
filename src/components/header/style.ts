import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  position: sticky;
  z-index: 9999;
  width: 100%;
  background: ${({ theme }) => theme['Midnight-Blue']};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 10px;
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

export const SideBar = styled.nav`
  display: none;

  .open-button,
  .close-button {
    cursor: pointer;
    display: flex;
    margin-top: 0.2rem;
    font-size: 4.5rem;
    color: ${({ theme }) => theme['Pale-Silver']};

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme['white-color']};
    }
  }

  .menu-open {
    right: 0;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

export const MenuSideBar = styled.div`
  background: ${({ theme }) => theme['Dark-Space-Blue-opacity']};

  width: 100%;
  height: 100vh;

  position: fixed;
  top: 8.5rem;
  z-index: -1;
  right: -100%;

  transition: right 0.4s ease-out;

  > ul {
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

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
`
