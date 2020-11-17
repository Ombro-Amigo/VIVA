export const errorCodes = errorCode => {
	switch (errorCode) {
		case 'auth/internal-error':
			return 'Erro de autenticação inesperado, se o erro persistir entre em contato com o suporte.';
		case 'auth/invalid-type-user':
			return 'Este usuário não tem acesso aqui. Verifique se você está entrando no lugar correto.';
		default:
			return `Ocorreu um erro inesperado, tente novamente.\n ErrorCode: ${errorCode}`;
	}
};

export const errorCodesEmail = errorCode => {
	switch (errorCode) {
		case 'auth/email-already-exists':
			return 'O e-mail fornecido já está em uso por outro usuário.';
		case 'auth/invalid-email':
			return 'O email fornecido é inválido, por favor verifique.';
		case 'auth/user-not-found':
			return 'Usuário inválido, por favor verifique.';
		default:
			return null;
	}
};

export const errorCodesPassword = errorCode => {
	switch (errorCode) {
		case 'auth/invalid-password':
			return 'A senha fornecida é inválida, por favor verifique.';
		case 'auth/wrong-password':
			return 'A senha fornecida está incorreta.';
		default:
			return null;
	}
};
