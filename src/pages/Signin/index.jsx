import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from './../../utils/style/colors';
import { useForm } from 'react-hook-form';
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`
const Inscription = styled.div`
    width: 360px;
    padding: 2rem 2rem;
    border-radius: 1rem;
    height: 550px;
    margin-top: 3rem;
    box-shadow: 0 0 25px rgba(0, 0, 0, 2);
`
const Title = styled.h1`
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
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
        border: 1px solid ${colors.disabledColor};
        border-radius: 0.5rem;
        outline: none;
        background: none;
        z-index: 1;
        padding-left: 2rem;
    }

    input::placeholder{
        font-size: 1rem;
        position: absolute;
        left: 2rem;
        color: ${colors.disabledColor};
    }
    
    label{
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

    i: first-child{
        position: absolute;
        left: 0.5rem;
        top: 0.8rem;
        color: ${colors.disabledColor};
        z-index: 3;
        font-size: 1rem;
    }

    #conf{
        position:absolute;
        color: ${colors.primaryColor};
    }

    input:focus + label{
        top: -.5rem;
        left: .8rem;
        color: ${colors.primaryColor};
        font-size: .8rem;
        font-weight: 500;
        width: fit-content;
        height: fit-content;
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

    p{
        position: absolute;
        color: ${colors.primaryColor};
        font-size: .8rem;
        top: 3.2rem;
        left: 1rem;
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
    cursor: pointer;
    margin-top: 0.5rem;
`
const Politics = styled.div`
    input{
        width: 1.2rem; 
        cursor: pointer;
    }

    label{
        font-size: 0.8rem;
        cursor: pointer;
    }
` 

function Sign() {

    const {handleSubmit, register, formState : {errors}} = useForm()

    const onSubmit =(data)=>{
        console.log(data);
    }

    return (
        <Container>
            <Inscription>
                <Title>Inscription</Title>
                
                <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
                    
                    <Form>
                        <input type="text"
                            id="nom" 
                            placeholder="nom d'utilisateur" 
                            {...register("name", {required : true})}
                        />
                        {errors.name && <p>Veuillez renseignez votre nom</p>}
                        <label htmlFor="name">nom d'utilisateur</label>
                        <i className='bi bi-person'></i>
                    </Form>
                    
                    <Form>
                        <input type="email" 
                            id="mail" 
                            placeholder="adresse mail" 
                            {...register("email", {required: true})}
                        />
                        {errors.email && <p>Veuillez renseignez votre adresse mail</p> }
                        <label htmlFor="mail">addresse mail</label>
                        <i className='bi bi-envelope'></i>
                    </Form>

                    <Form>
                        <input type="password" 
                            id="pass" 
                            placeholder= "mot de passe"
                            {...register("pass", {required : true})} />
                        <label htmlfor="pass">mot de passe</label>
                        {errors.pass && <p>Veuillez renseignez un mot de passe</p>}
                        <i className='bi bi-lock'></i>
                        <i className='bi bi-check2-circle' id='conf'></i>
                    </Form>
                    
                    <Form>
                        <input type="password" 
                            id="pass2" 
                            placeholder= "mot de passe"
                            {...register("pass2", {required : true})} />
                        <label htmlfor="pass2">mot de passe</label>
                        {errors.pass && <p>Veuillez confimer votre mot de passe</p>}
                        <i className='bi bi-lock'></i>
                        <i className='bi bi-check2-circle' id="conf"></i>
                    </Form>

                    <Politics>
                        <input type="checkbox" name="politique" id="politique" />
                        <label htmlFor="politique">Accepter les politiques de confidentialités</label>
                    </Politics>

                    <Button>s'inscrire</Button>                
                </form>

                <Small>
                    <span>Déjà incrit ? 
                        <Anchor to="/auth/login">Se connecter</Anchor>
                    </span>
                </Small>
            </Inscription>
        </Container>
    )
  }
  
  export default Sign