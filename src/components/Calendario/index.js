import React from 'react';

import { View, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import styles from './style';

export default function Calendario({ onValueChange, value, error }) {
	const onDayPress = day => {
		onValueChange(day.dateString);
	};

	LocaleConfig.locales.br = {
		monthNames: [
			'Janeiro',
			'Fevereiro',
			'Março',
			'Abril',
			'Maio',
			'Junho',
			'Julho',
			'Agosto',
			'Setembro',
			'Outubro',
			'Novembro',
			'Dezembro',
		],
		monthNamesShort: [
			'Jan',
			'Fev',
			'Mar',
			'Abr',
			'Mai',
			'Jun',
			'Jul',
			'Ago',
			'Set',
			'Out',
			'Nov',
			'Dec',
		],
		dayNames: [
			'Domingo',
			'Segunda',
			'Terça',
			'Quaarta',
			'Quinta',
			'Sextz',
			'Sábado',
		],
		dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
		today: 'Hoje',
	};
	LocaleConfig.defaultLocale = 'br';

	return (
		<View>
			<View style={styles.container}>
				<Calendar
					minDate={() => now}
					// onDayPress={(day) => {console.log('selected day', day)}}
					onDayPress={onDayPress}
					enableSwipeMonths
					markedDates={{
						[value]: {
							selected: true,
							disableTouchEvent: true,
							selectedColor: '#80C6F9',
							selectedTextColor: '#fff',
						},
					}}
					theme={{
						backgroundColor: '#ffffff',
						calendarBackground: '#ffffff',
						textSectionTitleColor: '#b6c1cd',
						textSectionTitleDisabledColor: '#d9e1e8',
						todayTextColor: '#80C6F9',
						dayTextColor: '#2d4150',
						textDisabledColor: '#d9e1e8',
						dotColor: '#80C6F9',
						selectedDotColor: '#ffffff',
						arrowColor: '#34C5A2',
						disabledArrowColor: '#d9e1e8',
						monthTextColor: '#000',
						indicatorColor: 'blue',
						textDayFontFamily: 'monospace',
						textMonthFontFamily: 'monospace',
						textDayHeaderFontFamily: 'monospace',
						textDayFontWeight: '300',
						textMonthFontWeight: 'bold',
						textDayHeaderFontWeight: '300',
						textDayFontSize: 16,
						textMonthFontSize: 16,
						textDayHeaderFontSize: 16,
					}}
				/>
			</View>

			<View style={styles.areaMsgError}>
				{error && <Text style={styles.msgError}>{error}</Text>}
			</View>
		</View>
	);
}
