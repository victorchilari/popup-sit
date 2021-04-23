import {typesOfSettings} from './actions';

const initialState = {
	boughtColor: '#325106',
	soldColor: '#654580',
	listedColor: '#92531',
	unlistedColor: '#190132'
};

export default function settingsReducer(state = initialState, action) {
	switch (action.type) {
		case typesOfSettings.SET_A_VALUE_OF_SETTINGS:
			return {...state, [action.key]: action.value};
		default:
			return state;
	}
}
