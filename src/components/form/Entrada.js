import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { StyleSheet, View, Image, TextInput, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

export default function Entrada(props) {
   const {
      name,
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
   } = props;

   const inputRef = useRef(null);
   const { fieldName, registerField, defaultValue, error } = useField(name);
   useEffect(() => {
      inputRef.current.value = defaultValue;
   }, [defaultValue]);

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

   const eye = require('../../assets/icon/eye-regular.png')
   const eyeSlash = require('../../assets/icon/eye-slash.png')

   const [imgOlho, setimgOlho] = useState(eye)

   function renderIcon() {
      if(icon) {
         return (
            <Image
               source={icon}
               style={styles.icon}
            />
         );
      }
   }

   function renderObrigatorio(value){
      if(obrigatorio && !value){
         return (
            <Text style={styles.obrigatorio}>*</Text>
         )
      }
   }

   function renderMsg(){
      if(verificaCondicao){
         if(condicao && msgSucesso){
               return <Text style={styles.senhaCorreta}>{msgSucesso}</Text>
         }else if(!condicao && msgError){
               return (
                  <Text style={styles.senhaErrada}>{msgError}</Text>
               )
         } 
      }
   }

   function renderEye(){
      if(tipoTexto === "password"){
         return (
            <TouchableOpacity onPress={onPress}>
               <Image
                  style={styles.eyeIcon}
                  source={secureTextEntry ? eyeSlash : eye}
               />
            </TouchableOpacity>
         )
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
                ref={inputRef}
                defaultValue={defaultValue}
                style={[styles.input]}
                placeholder={placeholder}
               //  value='123'
                onChangeText={value => {if(inputRef.current){inputRef.current.value = value}}}
                secureTextEntry={secureTextEntry ? true : false}
                keyboardType={tipoTeclado ? tipoTeclado : "default"}
                editable={desabilitado ? false : true}
                maxLength={max ? max : null}
                textContentType={tipoTexto ? tipoTexto : null}
            />
            {renderEye()}
            
        </View>
        <View style={styles.areaConfirmacaoSenha}>
        { error && <Text style={styles.senhaErrada}>{error}</Text>}
            {renderMsg()}
        </View>
    </>
   )
}

