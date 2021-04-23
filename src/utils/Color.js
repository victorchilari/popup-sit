export default class Color {
	constructor(value, type) {
		switch (type) {
			case 'rgb':
				this._hex = Color.RGBAToHex(value);
				break;
			case 'hex':
				this._hex = value;
				break;
			default:
				throw new Error('Invalid type');
		}
	}

	get rgba() {
		return Color.hexToRGBA(this);
	}
	get hex() {
		return this._hex;
	}
}

Color.RGBAToHex = function ({r, g, b, a = 1}) {
	r = Number(r).toString(16);
	g = Number(g).toString(16);
	b = Number(b).toString(16);

	if (a < 1) {
		const scaledA = ((a * 1000) / 3.9).toFixed(0); //! dont touch
		a = Number(scaledA).toString(16);
	} else if (a === 1) {
		a = 'ff';
	}

	if (r.length === 1) r = '0' + r;
	if (g.length === 1) g = '0' + g;
	if (b.length === 1) b = '0' + b;
	if (a.length === 1) a = '0' + a;

	return '#' + r + g + b + a;
};

Color.hexToRGBA = function (props) {
	const _hex = props._hex || props;
	const h = _hex;
	let r = 0,
		g = 0,
		b = 0,
		a = 1;

	r = parseInt(h[1] + h[2], 16);
	g = parseInt(h[3] + h[4], 16);
	b = parseInt(h[5] + h[6], 16);

	if (h.length >= 8) {
		const alfa = h.slice(7);
		const parsed = parseInt(alfa, 16); // can return 255
		a = parseInt((parsed / 255) * 100) / 100; //! dont touch
	}
	return {r, g, b, a};
};

// const a = new Color('#1F4578ff', 'hex');
// console.log(a.rgba);
// const b = new Color({r: '255', g: '9', b: '88', a: '1'}, 'rgb');
// console.log(b.hex);
// const d = new Color({r: '3', g: '9', b: '88', a: '0.99'}, 'rgb');
// console.log(d.rgba);
