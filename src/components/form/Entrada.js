import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useField } from '@unform/core';
import { StyleSheet, View, Image, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

export default function Entrada(props) {
	const {
		icon,
		placeholder,
		value,
		onChangeText,
		secureTextEntry,
		obrigatorio,
		tipoTeclado,
		desabilitado,
		max,
		tipoTexto,
		onPress,
		verificaCondicao,
		condicao,
		msgError,
		msgSucesso,
		error,
		onFocus,
	} = props;

	const eye = require('../../assets/icon/eye-regular.png');
	const eyeSlash = require('../../assets/icon/eye-slash.png');

	const [imgOlho, setimgOlho] = useState(eye);

	function renderIcon() {
		if (icon) {
			return <Image source={icon} style={styles.icon} />;
		}
	}

	function renderObrigatorio(value) {
		if (obrigatorio && !value) {
			return <Text style={styles.obrigatorio}>*</Text>;
		}
	}

	function renderMsg() {
		if (verificaCondicao) {
			console.log('errorRdx = ', msgError);
			if (condicao && msgSucesso) {
				return <Text style={styles.senhaCorreta}>{msgSucesso}</Text>;
			}
			if (!condicao && msgError) {
				return <Text style={styles.senhaErrada}>{msgError}</Text>;
			}
		}
		return null;
	}

	function renderEye() {
		if (tipoTexto === 'password') {
			return (
				<TouchableOpacity onPress={onPress}>
					<Image
						style={styles.eyeIcon}
						source={secureTextEntry ? eyeSlash : eye}
					/>
				</TouchableOpacity>
			);
		}
	}

	return (
		<>
			<View style={styles.container}>
				{renderIcon()}
				<View style={styles.areaObrigatorio}>
					{renderObrigatorio(value)}
				</View>
				<TextInput
					style={[styles.input]}
					placeholder={placeholder}
					value={value}
					onChangeText={onChangeText}
					secureTextEntry={!!secureTextEntry}
					keyboardType={tipoTeclado || 'default'}
					editable={!desabilitado}
					maxLength={max || null}
					textContentType={tipoTexto || null}
					onFocus={onFocus}
				/>
				{renderEye()}
			</View>
			<View style={styles.areaConfirmacaoSenha}>
				{error && <Text style={styles.senhaErrada}>{error}</Text>}
				{!error && renderMsg()}
			</View>
		</>
	);
}
