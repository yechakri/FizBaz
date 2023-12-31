const  FizBaz = (n) => {
	const a = n % 3 === 0;
	const b = n % 5 === 0;
  return (a ? (b ? "FizBaz" : "Fiz") : (b ? "Baz" : 'wrong number'))
}
