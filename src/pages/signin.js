import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../container/headerContainer';
import FooterContainer from '../container/footerContainer';
import Form from '../components/form';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

function SignIn() {
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  // check form input elements are valid
  // email and password

  const handleSignIn = (event) => {
    event.preventDefault();

    // firebase work here!!
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setPassword('');
        setEmailAddress('');
        setError(err.message);
      });
  };

  const isInvalid = password === '' || emailAddress === '';

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              placeholder='Email Address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              type='password'
              placeholder='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix?{' '}
            <Form.Link to={ROUTES.SIGN_UP}> Sign up now.</Form.Link>
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

export default SignIn;
