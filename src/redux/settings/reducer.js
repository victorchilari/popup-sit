import {typesOfSettings} from './actions';

const initialState = {
	others: {
		skinInfoView: 'circle',
		currency: 'usd',
		language: 'en',
		theme: 'light'
	},
	dealColors: {
		bought: '#ffcc00ff',
		sold: '#38bb31ff',
		listed: '#3949ddff',
		unlisted: '#030958ff'
	}
};

export default function settingsReducer(state = initialState, action) {
	switch (action.type) {
		case typesOfSettings.SET_A_DEAL_COLOR:
			const dealcolors = {...state.dealColors};
			dealcolors[action.dealType] = action.color;
			return {...state, dealColors: dealcolors};
		case typesOfSettings.SET_A_VALUE_OF_SETTINGS:
			return {...state, [action.key]: action.value};
		default:
			return state;
	}
}
