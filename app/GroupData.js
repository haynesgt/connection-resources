import Passport from './Passport';

export function getGroups() {
  let h = new Headers();
  h.append('Content-Type', 'application/json');
  return fetch(
    Passport.server + '/communities'
  ).then(
    (response) => {
      return response.text();
    }
  ).then(
    (text) => {
      return JSON.parse(text)[0];
    }
  );
}

export function createGroup(
    name,
    description,
    member_emails,
    admin_emails,
    sponsor_emails
) {
  let h = new Headers();
  h.append('Content-Type', 'application/json');
  return fetch(
    Passport.server + '/community/create',
    {
      method: 'POST',
      headers: h,
      body: JSON.stringify({
        name,
        description,
        member_emails,
        admin_emails,
        sponsor_emails
      })
    }
  );
}
