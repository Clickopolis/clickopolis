export interface CreateGradientOpts {
	n1: number;
	n2: number;
	c1: string;
	c2: string;
}

export const createGradient = ({ n1, n2, c1, c2 }: CreateGradientOpts) => {
	return `linear-gradient(to right, ${c1} ${(n1 / n2) * 100}%, ${c2} ${(n1 / n2) * 100}%, ${c2}`;
};
