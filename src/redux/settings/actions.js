export const typesOfSettings = {
	SET_A_VALUE_OF_SETTINGS: 'SET_A_VALUE_OF_SETTINGS'
};

export const setSettings = ({key, value}) => ({
	type: typesOfSettings.SET_A_VALUE_OF_SETTINGS,
	key,
	value
});
