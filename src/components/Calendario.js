import React, {Component} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import {Calendar} from 'react-native-calendars'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt'] = {
  monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
  monthNamesShort: ['Jan.','Fev.','Mar.','Abr.','Mai.','Jun.','Jul.','Ago.','Set.','Out.','Nov.','Dez.'],
  dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
  dayNamesShort: ['Dom.','Seg.','Ter.','Qua.','Qui.','Sex.','Sab.'],
  today: 'Hoje\'hui'
};
LocaleConfig.defaultLocale = 'pt';

export default class Calendario extends Component{
    render(){
        return(
            <Calendar
                style={styles.oi}
            
            />
        )
    }
}

const styles = StyleSheet.create({
    oi: {
        backgroundColor: "#000",
        borderRadius: 10,
    }
})