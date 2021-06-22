function rand(range: number) {
	let u = 0,
		v = 0;
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	return Math.sqrt(range * -1 * Math.log(u)) * Math.cos(range * Math.PI * v);
}
