import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from './../../utils/style/colors'
import { useForm } from 'react-hook-form'
import facebook from './../../assets/facebook.png'
import google from './../../assets/google.png'
import git from './../../assets/git.png'
import React from 'react'

const Return = styled(Link)`
  i {
    font-size: 2rem;
    margin-left: 4rem;
    color: ${colors.darkGray};
  }
  i:hover {
    color: ${colors.primaryColor};
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
const Connexion = styled.div`
  width: 450px;
  padding: 4rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 25px ${colors.lightGray};
`
const Title = styled.h1`
  font-weight: bold;
  text-align: center;
  margin-bottom: 3rem;
`
const Form = styled.div`
  position: relative;
  height: 50px;
  margin-bottom: 1.4rem;

  input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border: 1px solid ${colors.disabledColor};
    border-radius: 0.5rem;
    outline: none;
    background: none;
    z-index: 1;
    padding-left: 2rem;
  }

  input::placeholder {
    font-size: 1rem;
    position: absolute;
    left: 2rem;
    color: ${colors.disabledColor};
  }

  label {
    position: absolute;
    left: 1.6rem;
    top: 0.9rem;
    padding: 0 0.25rem;
    width: 50%;
    height: 50%;
    font-size: 0.8rem;
    background-color: ${colors.white};
    color: ${colors.disabledColor};
    transition: 0.25s;
    z-index: 2;
    pointer-events: none;
  }

  label + i {
    position: absolute;
    left: 0.5rem;
    top: 0.8rem;
    color: ${colors.disabledColor};
    z-index: 3;
    font-size: 1rem;
  }

  input:not(:placeholder-shown) + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    width: fit-content;
    height: fit-content;
    z-index: 10;
    background: #fff;
  }

  input:focus + label {
    top: -0.5rem;
    left: 0.8rem;
    color: ${colors.primaryColor};
    font-size: 0.8rem;
    width: fit-content;
    height: fit-content;
    z-index: 10;
    background: #fff;
  }

  input:not(:placeholder-shown) input:not(:focus) + label {
    top: -0.5rem;
    left: 0.8rem;
    font-size: 0.75rem;
    z-index: 10;
  }

  input:focus {
    border: 1px solid ${colors.primaryColor};
  }

  p {
    position: absolute;
    color: ${colors.primaryColor};
    font-size: 0.8rem;
    top: 3.2rem;
    left: 1rem;
  }
`

const ActionStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    font-size: 0.8rem;
  }

  div input {
    position: absolute;
    margin-right: 0.18rem;
  }
`
const Small = styled.small`
  display: flex;
  margin-top: 1rem;
  font-size: 0.78rem;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`
const Anchor = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primaryColor};
`
const Button = styled.button`
  display: block;
  padding: 0.72rem 2rem;
  width: 100%;
  outline: 0;
  border: 0;
  background-color: ${colors.primaryColor};
  color: ${colors.lightGray};
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: 'Fira Sans';
  cursor: pointer;
  margin-top: 0.5rem;
`

const SocialConnect = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`

const LogoStyle = styled.span`
  img {
    width: 35px;
    height: 35px;
    margin-left: 1.4rem;
  }
`

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <React.Fragment>
      <Return>
        <Link to="/">
          <i className="bi bi-arrow-left"></i>
        </Link>
      </Return>
      <Container>
        <Connexion>
          <Title>Connexion</Title>

          <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
            <Form>
              <input
                type="text"
                id="username"
                placeholder=""
                {...register('name', { required: true })}
              />
              {errors.name && <p>Veuillez renseignez votre nom</p>}
              <label htmlFor="username">Nom d'utilisateur</label>
              <i className="bi bi-person"></i>
            </Form>

            <Form>
              <input
                type="password"
                id="password"
                placeholder=""
                {...register('pass', { required: true })}
              />
              <label htmlFor="password">Mot de passe</label>
              {errors.pass && <p>Veuillez renseignez un mot de passe</p>}
              <i className="bi bi-lock"></i>
            </Form>

            <ActionStyle>
              <div>
                <input type="checkbox" id="rappel" />
                &nbsp;&nbsp;
                <label htmlFor="rappel">Se souvenir de moi</label>
              </div>
              <small>
                <Anchor to="/recover">
                  <span>Mot de passe oublié ?</span>
                </Anchor>
              </small>
            </ActionStyle>

            <Button>Se connecter</Button>
          </form>

          <Small>
            Pas de compte ?
            <Anchor to="/sign-up">
              <span>&nbsp;&nbsp; S'incrire maintenant</span>
            </Anchor>
          </Small>

          <SocialConnect>
            <h5>Ou continuer avec</h5>
            <LogoStyle>
              <Link to="/facebook">
                <img src={facebook} alt="logo-windows" />
              </Link>
            </LogoStyle>
            <LogoStyle>
              <Link to="/google">
                <img src={google} alt="logo-gmail" />
              </Link>
            </LogoStyle>
            <LogoStyle>
              <Link to="/git">
                <img src={git} alt="logo-git" />
              </Link>
            </LogoStyle>
          </SocialConnect>
        </Connexion>
      </Container>
    </React.Fragment>
  )
}

export default Login
