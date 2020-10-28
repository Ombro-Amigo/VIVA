import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import {Text, View, StyleSheet, TextInput} from "react-native"
import { RadioButton } from "react-native-paper"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export default function EscolhaGenero(props){
    const {onValueChange, value, name} = props
    const [genero, setGenero] = useState('');

    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            clearValue(ref) {
                ref.value = '';
                ref.clear();
            },
            setValue(ref, value) {
                ref.setNativeProps({ text: value });
                inputRef.current.value = value;
            },
            getValue(ref) {
                return ref.value;
            },
        });
    }, [fieldName, registerField]);

    return (
        <View>
            <RadioButton.Group
                onValueChange={value => {
                    setGenero(value);
                    if(inputRef.current)
                        inputRef.current.value = value
                    }}
                value={genero}
            >
                <View style={styles.areaEscolha}>
                    <View style={styles.escolha}>
                        <RadioButton value="Feminino" color="#34C5A2"/>
                        <Text style={styles.txtOpcoes}>Feminino</Text>
                    </View>
                    <View style={styles.escolha} >
                        <RadioButton value="Masculino" color="#34C5A2"/>
                        <Text style={styles.txtOpcoes}>Masculino</Text>
                    </View>
                    <View style={styles.escolha} >
                        <RadioButton value="Outro" color="#34C5A2"/>
                        <Text style={styles.txtOpcoes}>Outro</Text>
                    </View>
                </View>
            </RadioButton.Group>

            <View style={styles.areaConfirmacaoSenha}>
                { error && <Text style={styles.senhaErrada}>{error}</Text>}
            </View>

            <TextInput
                style={{display: 'none'}}
                ref={inputRef}
                value={genero}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    areaEscolha: {
        flex: 1,
        justifyContent: "space-between",
        padding: wp("1%"),
    },
    escolha: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: wp("1%")
    },
    txtOpcoes: {
        fontSize: wp("4%"),
        fontWeight: "bold",
    },
})