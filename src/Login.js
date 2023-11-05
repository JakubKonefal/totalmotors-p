import { useState } from 'react';
import styled from 'styled-components';

import { app } from './firebase/firebase.ts';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const LoginFormWrapper = styled.div`
  width: 340px;
  border: 1px solid gray;
  padding: 36px;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;
`;

const InputsWrapper = styled.div`
  display: grid;
  gap: 12px;
`;

const Input = styled.input`
  &:focus {
    border-color: #e06826;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 24px;

  &:hover {
    background-color: #2f6fad;
  }
`;

function Login() {
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    console.log({ email, password });

    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setLoading(false);
        setSuccess(true);
        setError(false);
        const user = userCredential.user;
        console.log({ userCredential, user });
        // ...
      })
      .catch((error) => {
        console.log({ error });

        setLoading(false);
        setSuccess(false);
        setError(true);

        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Wrapper>
      <LoginFormWrapper>
        <Title>
          Sprzedamtwojsamochod.pl
          <br />
          System do zarządzania <br /> treścią (CMS) <br />
        </Title>
        <InputsWrapper>
          <Input
            type='text'
            placeholder='Nazwa użytkownika'
            id='email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            placeholder='Hasło'
            id='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputsWrapper>
        <Button type='submit' onClick={handleLogin}>
          Login
        </Button>
      </LoginFormWrapper>
    </Wrapper>
  );
}

export default Login;
