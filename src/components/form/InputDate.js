import React, { useState, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { View, TouchableWithoutFeedback, TextInput, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import { styles } from './styles';

function InputDate({ name }) {
   const [dataNasc, setDataNasc] = useState('');
   const [show, setShow] = useState(false);

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

   return (
      <View>
         <TouchableWithoutFeedback onPress={() => setShow(true)}>
            <View>
               <View style={styles.container}>
                  <View style={styles.areaObrigatorio}>
                     <Text style={styles.obrigatorio}>*</Text>
                  </View>
   
                  <TextInput
                     ref={inputRef}
                     // defaultValue={defaultValue}
                     style={[styles.input]}
                     placeholder={'Data de nascimento'}
                     value={dataNasc}
                     editable={false}
                  />
               </View>
               
               <View style={styles.areaConfirmacaoSenha}>
                  { error && <Text style={styles.senhaErrada}>{error}</Text>}
               </View>
            </View>
         </TouchableWithoutFeedback>

         

         <DateTimePicker
            isVisible={show}
            mode='date'
            onConfirm={(date) => {
               setShow(false);
               setDataNasc(moment(date).format('DD/MM/YYYY'))
               if(inputRef.current)
                  inputRef.current.value = moment(date).format('DD/MM/YYYY')
            }}
            onCancel={() => {
               setShow(false);
               // setDataNasc(dataNasc);
            }}
            maximumDate={new Date()}
         />
      </View>
   );
}

export default InputDate;