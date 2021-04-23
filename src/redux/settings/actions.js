export const typesOfSettings = {
	SET_A_DEAL_COLOR: 'SET_A_DEAL_COLOR',
	SET_A_VALUE_OF_SETTINGS: 'SET_A_VALUE_OF_SETTINGS'
};

export const setDealCollor = ({dealType, color}) => ({
	type: typesOfSettings.SET_A_DEAL_COLOR,
	dealType,
	color
});

export const setSettings = ({key, value}) => ({
	type: typesOfSettings.SET_A_VALUE_OF_SETTINGS,
	key,
	value
});
