import React, {Component} from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'

export default class Calendario extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.handleChangeDay = this.handleChangeDay.bind(this);
    }
     
    handleChangeDay(date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render(){
        const {selectedStartDate}  = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return(
            <View style={styles.container}>
                <CalendarPicker
                    onDateChange={this.handleChangeDay}
                    weekdays={['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']}
                    months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                    previousTitle="Anterior"
                    nextTitle="Próximo"
                    width={wp("95%")}
                    todayTextStyle={"black"}
                    dayShape={"circle"}
                    selectedDayColor={"#80C6F9"}
                    selectedDayTextColor={"white"}
                    
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: hp("2%"),
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#000"
    },
})