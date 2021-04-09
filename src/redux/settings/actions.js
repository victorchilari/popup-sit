// export const types = {
// 	SET_DEAL_COLOR: 'SET_DEAL_COLOR'
// };
// type: types.SET_DEAL_COLOR,

export const setSettings = ({key, color}) => ({
	type: 'SET_SETTINGS',
	key,
	color
});
