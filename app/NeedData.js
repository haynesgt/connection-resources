export function getNeeds() {
  return Promise.resolve([
    {
      community: {
        name: 'Native Community'
      },
      name: 'Space (1hr / week)',
      description: 'Need a meeting place',
      key: 1
    }, {
      community: {
        name: 'Other Community'
      },
      name: 'Van (1 day / month)',
      description: 'Need a van to move food',
      key: 2
    }
  ]);
}
