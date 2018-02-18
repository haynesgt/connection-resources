import Passport from './Passport';

export function createUser(
  email,
  password
) {
  let h = new Headers();
  h.append('Content-Type', 'application/json');
  return fetch(
    Passport.server + '/signup',
    {
      method: 'POST',
      headers: h,
      body: JSON.stringify({
        email,
        password,
        confirmPassword: password
      })
    }
  );
}
