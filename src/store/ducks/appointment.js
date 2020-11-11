export const Types = {};

const INITIAL_STATE = {
	appointments: [
		{
			id: '1',
			user: { crp: 'SP/000000', name: 'Mariana da Silva' },
			informations: {
				date: '10/12/2020',
				start: '13:00',
				end: '14:00',
				status: 'Confirmada',
			},
		},
		{
			id: '2',
			user: { crp: 'SP/000000', name: 'Mariana da Silva' },
			informations: {
				date: '10/12/2020',
				start: '13:00',
				end: '14:00',
				status: 'Confirmada',
			},
		},
		{
			id: '3',
			user: { crp: 'SP/000000', name: 'Mariana da Silva' },
			informations: {
				date: '10/12/2020',
				start: '13:00',
				end: '14:00',
				status: 'Confirmada',
			},
		},
	],
};

export default function appointmentReducer(state = INITIAL_STATE, action) {
	return state;
}
