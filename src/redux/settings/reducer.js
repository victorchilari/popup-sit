// import {types} from './actions';
// case types.SET_DEAL_COLOR:

const initialState = {
	boughtColor: '#325106',
	soldColor: '#654580',
	listedColor: '#92531',
	unlistedColor: '#190132'
};

export default function settingsReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_SETTINGS':
			return {...state, [action.key]: action.color};
		default:
			state;
			break;
	}
}
