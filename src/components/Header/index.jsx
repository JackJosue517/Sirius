import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { months, days } from './../../data/date'
import colors from './../../utils/style/colors'

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`

const LogoStyle = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.4em;
  h2#sr-logo{
    color: ${colors.primaryColor};
  }
`

const ActionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: max-content;
`
const NavStyle = styled.nav`
  display: flex;
  align-items: center;
  i{
    color: ${colors.darkGray};
    font-weight: 600;
    font-size: 1.5em;
    margin-left: 35px;
  }
  i:hover{
    color: ${colors.primaryColor};
  }
`

const AccountStyle = styled.nav`
  margin-left: 30px;
  i{
    color: ${colors.darkGray};
    font-weight: 600;
    font-size: 1.5em;
    margin-left: 35px;
  }
  i:hover{
    color: ${colors.primaryColor};
  }
`

const LinkAuth = styled(Link)`
  color: ${colors.darkGray};
  font-weight: 600;
  margin-left: 35px;
  &:hover{
    color: ${colors.primaryColor};
  }
  text-decoration: none;
`


function Header() {
  // Date & time manipulation
  const date = new Date()
  const month = months[date.getMonth()]
  const day = days[date.getDay()]
  const hour = date.getHours()
  const minutes = date.getMinutes()

  // check if user is authenticated
  const isAuthenticated = false

  return (
    <HeaderStyle>
      {/* Logo section */}
      <div>
        <i className="bi bi-start-fill"></i>
          <LogoStyle to="/">
            <h2 id='sr-logo'>Sirius.</h2>
          </LogoStyle>
      </div>

      {/* Navbar & actions section */}
      <ActionStyle>
        <NavStyle>
          <span>{hour}:{minutes} &#xB7; {day}. 29 {month}.</span>
          <Link to="/faq">
            <i className="bi bi-question-circle"></i>
          </Link>
          <Link to="/report">
            <i className="bi bi-chat-left-dots"></i>
          </Link>
          <Link to="/settings">
            <i className="bi bi-gear"></i>
          </Link>
        </NavStyle>

        <AccountStyle>
          { isAuthenticated ? <div>
            <Link to="/account">
              <i className="bi bi-gem"></i>
            </Link>
            <Link to="/account">
              <i className="bi bi-person-circle"></i>
            </Link>
          </div> : <div>
            <LinkAuth to="/sign-up">
              <span>S'inscrire</span>
            </LinkAuth>
            <LinkAuth to="/login">
              <span>Se connecter</span>
            </LinkAuth>
          </div>}
        </AccountStyle>
      </ActionStyle>
    </HeaderStyle>
  )
}

export default Header
