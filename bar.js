function bar() {
  return 'bar';
}

function multiBar() {
  const barArray = [
    'bar',
    'Bar',
    'bAr',
    'baR',
    'BAR',
  ];

  return barArray.map(bar => bar.toLowerCase());
}
