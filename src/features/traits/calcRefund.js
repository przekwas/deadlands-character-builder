export const calcRefund = (skillsToRefund) => {
	let skillRefund = 0;
	for (const key in skillsToRefund) {
		skillRefund += skillsToRefund[key].spent.reduce((acc, val) => (acc += val), 0);
	}
	return skillRefund;
};
