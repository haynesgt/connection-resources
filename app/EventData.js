import Passport from './Passport';

export function getEvents() {
  let h = new Headers();
  h.append('Content-Type', 'application/json');
  return fetch(
    Passport.server + '/meetings'
  ).then((response) => response.text())
  .then((text) => JSON.parse(text)[0]);
  /*
  return Promise.resolve([
    {
      name: 'Event Title',
      description: 'A good event',
      start: new Date('Feburary 20, 2018 18:00'),
      end: new Date('February 20, 2018 20:00'),
      key: 1
    }, {
      name: 'Other Event',
      description: 'A nice event',
      start: new Date('Feburary 21, 2018 18:00'),
      end: new Date('February 21, 2018 20:00'),
      key: 2
    }
  ]);
  */
}

export function createEvent(
  name,
  description,
  startDate,
  endDate,
  site,
  attendee_emails,
  sponsor_emails
) {
  let h = new Headers();
  h.append('Content-Type', 'application/json');
  return fetch(
    Passport.server + '/meeting/create',
    {
      method: 'POST',
      headers: h,
      body: JSON.stringify({
        name,
        description,
        site,
        attendee_emails,
        sponsor_emails,
        startDate,
        endDate
      })
    }
  );
}
