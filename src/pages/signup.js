import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../container/headerContainer';
import FooterContainer from '../container/footerContainer';
import Form from '../components/form';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = firstName === '' || emailAddress === '' || password === '';

  const handleSignup = (event) => {
    event.preventDefault();

    //  do firebase stuffs

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((res) =>
        res.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((err) => {
        setFirstName('');
        setEmailAddress('');
        setPassword('');
        setError(err.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method='POST'>
            <Form.Input
              type='text'
              placeholder='First name'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

            <Form.Input
              type='text'
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              type='password'
              placeholder='Password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type='submit'>
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user?
            <Form.Link to={ROUTES.SIGN_IN}> Sign in now.</Form.Link>
          </Form.Text>

          <Form.Text>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.Text>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}

export default Signup;
