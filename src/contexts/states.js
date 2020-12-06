import React, { Context, createContext, useState } from 'react';

import AuthContext from './auth/auth';

const StatesContext = createContext();

export const StatesProvider = ({ children }) => {
	const [dispo, setDispo] = useState(1);
	const [rangeConsultas, setRangeConsultas] = useState(2);
	const [validated, setValidated] = useState(false);
	return (
		<StatesContext.Provider
			value={{
				dispo,
				setDispo,
				rangeConsultas,
				setRangeConsultas,
				validated,
				setValidated,
			}}
		>
			{children}
		</StatesContext.Provider>
	);
};

export default StatesContext;
