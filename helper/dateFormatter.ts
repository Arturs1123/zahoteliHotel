// return Russian date from Date string (i.e. input = "2024-08-15"    output = "6 марта, ср"   )
export const formatDateInRussian = (dateStr: string, showWeekday: boolean = false, showYear: boolean = false, showTime: boolean = false): string => {

	const date = new Date(dateStr)

	const dayFormatter = new Intl.DateTimeFormat('ru-RU', { day: 'numeric' });
	const monthFormatter = new Intl.DateTimeFormat('ru-RU', { month: 'long' });
	const weekdayFormatter = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' });
	const yearFormatter = new Intl.DateTimeFormat('ru-RU', { year: 'numeric' });
	const hourFormatter = new Intl.DateTimeFormat('ru-RU', { hour: 'numeric' });
	const minFormatter = new Intl.DateTimeFormat('ru-RU', { minute: 'numeric' });

	const day = dayFormatter.format(date);
	const month = monthFormatter.format(date);
	const weekday = weekdayFormatter.format(date);
	const year = yearFormatter.format(date)
	const hour = hourFormatter.format(date)
	const minute = minFormatter.format(date)
	let data = `${day} ${month}`;
	if (showWeekday) data += ` ${weekday}`;
	if (showYear) data += ` ${year}`;
	if (showTime) data += `, ${hour}:${minute}`;
	return data;
};


//  return Date object from "2024-08-15" (i.e. input = "2024-08-15"   output = new Date(2024, 07, 15))
export function parseDate(dateStr: string): Date {
	const [year, month, day] = dateStr.split('-').map(Number);
	const date = new Date(year, month - 1, day);
	return date;
}

// return number of nights between two date (i.e. input: startDateStr = "2024-08-15"; endDateStr = "2024-08-18"    output = 3)
export function getNumberOfNights(startDateStr: string, endDateStr: string): number {
	const startDate = new Date(startDateStr);
	const endDate = new Date(endDateStr);
	const timeDifference = endDate.getTime() - startDate.getTime();
	const numberOfNights = timeDifference / (1000 * 60 * 60 * 24);
	return numberOfNights;
}

// return array of days between certain days (i.e. input = "2024-08-15;2024-08-18" output = [{ "day": "2024-08-16" }, { "day": "2024-08-17" }]  )
export function getDateArray(occupied: string): { day: string }[] {
	const [startDateStr, endDateStr] = occupied.split(';');
	const startDate = new Date(startDateStr);
	const endDate = new Date(endDateStr);

	const dateArray: { day: string }[] = [];
	let currentDate = new Date(startDate);
	currentDate.setDate(currentDate.getDate() + 1); // start from the day after the start date

	while (currentDate < endDate) {
		dateArray.push({ day: currentDate.toISOString().split('T')[0] });
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return dateArray;
}

// input "2024-08-02T01:47:50.130Z"   output "18/07/2024"

export function datePrettier(dateStr: string): string {
	const temp = new Intl.DateTimeFormat('en-GB').format(new Date(dateStr))
	return temp.replaceAll('/', '.');
}