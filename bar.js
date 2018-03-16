function bar() {
  return 'bar bar';
}

function multiBar() {
  const barArray = [
    'baR',
    'Bar',
    'bAr',
    'baR',
    'BAR',
  ];

  return barArray.map(x => x.toLowerCase());
}
