import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../utils/style/colors';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`
const Connexion = styled.div`
    width: 360px;
    padding: 4rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 25px rgba(0, 0, 0, 2);
`
const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    margin-bottom: 3rem;
`
const Form = styled.div`
    position: relative;
    height: 50px;
    margin-bottom: 1.5rem;

    input{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        font-size: 1rem;
        font-family: 'Fira Sans';
        border: 1px solid ${colors.disabledColor};
        border-radius: 0.5rem;
        outline: none;
        background: none;
        z-index: 1;
        padding: 1rem;
    }
    
    label{
        position: absolute;
        left: 1.5rem;
        top: 0.7rem;
        padding: 0 0.25rem;
        width: 50%;
        height: 50%;
        background-color: ${colors.white};
        color: ${colors.disabledColor};
        transition: 0.25s;
        z-index: 2;
        pointer-events: none;
    }

    i{
        
        position: absolute;
        left: 0.5rem;
        top: 0.8rem;
        color: ${colors.disabledColor};
        z-index : 20;
    }
    input:focus + label{
        top: -.5rem;
        left: .8rem;
        color: ${colors.primaryColor};
        font-size: 0.75rem;
        font-weight: 500;
        width: fit-content;
        z-index: 10;
    }
    
    input:not(:placeholder-shown)input:not(:focus)+ label{
        top: -.5rem;
        left: .8rem;
        font-size: 0.75rem;
        font-weight: 500;
        z-index: 10;
    }
    
    input:focus{
        border: 1px solid ${colors.primaryColor};
    }
`

const ActionStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        font-size: 0.8rem;
    }

    div input{
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
`
const Anchor = styled(Link)`
    cursor: pointer;
    text-decoration: none;
` 
const Button = styled.button`
    display: block;
    padding: 0.72rem 2rem;
    width: 100%;
    outline: 0;
    border: 0;
    background-color: ${colors.primaryColor};
    color: ${colors.lightGray};
    border-radius: .5rem;
    font-size: 1rem;
    font-family: 'Fira Sans';
    cursor: pointer;
    margin-top: 0.5rem;
`

function Login() {

    const handleSubmit =(e)=>{
        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);

        const name = formData.get("name");
        const pass = formData.get("password");

        console.log(name, pass);

        form.reset();
    }

    
    return (
        <Container>
            <Connexion>
                <Title>Connexion</Title>
                
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <Form>
                        <input type="text" name="name" id="name" placeholder="nom d'utilisateur" required/>
                        <label htmlFor="name">nom d'utilisateur</label>
                        <i className='bi bi-person'></i>
                    </Form>

                    <Form>
                        <input type="password" name="password" id="password" placeholder="mot de passe" required/>
                        <label htmlFor="password">mot de passe</label>
                        <i className='bi bi-lock'></i>
                    </Form>

                    <ActionStyle>

                        <div>
                            <input type="checkbox" id="rappel"/>
                            <label htmlFor="rappel">Se souvenir de moi</label>
                        </div>
                        <small>
                            <Anchor to="/recup">
                                <span>Mot de passe oublié ?</span>
                            </Anchor>
                        </small>
                    </ActionStyle>

                    <Button>connexion</Button>                
                </form>

                <Small>
                    Pas de compte ? 
                    <Anchor to="/auth/sign">
                        <span>S'incrire maintenant</span>
                    </Anchor>
                </Small>
            </Connexion>
        </Container>
    )
  }
  
  export default Login