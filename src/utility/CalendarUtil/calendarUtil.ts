// Write Utilities required to run calendar component
interface Day {
	date: string;
	isCurrentMonth?: boolean;
	isSelected?: boolean;
	isToday?: boolean;
}
class Time {
	public day: number;
	public month: number;
	public year: number;
	public months: string[] = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"November",
		"October",
		"December",
	];

	constructor() {
		const currentDate = new Date();

		this.day = currentDate.getDate();
		this.month = currentDate.getMonth();
		this.year = currentDate.getUTCFullYear();
	}

	static padDigitWithZero = (num: number | string): string => {
		return num.toString().padStart(2, "0");
	};

	static convertISODateStringToCommon = (isoDateString: string): string => {
		const dateObj = new Date(isoDateString);
		const year = dateObj.getFullYear().toString();
		const month = dateObj.getMonth().toString().padStart(2, "0");
		const day = dateObj.getDate().toString().padStart(2, "0");

		return `${year}-${month}-${day}`;
	};

	getDaysInMonth(month: number, year: number): number {
		return new Date(year, month, 0).getDate();
	}

	getDaysOffsetCalendar(): number {
		return new Date(this.year, this.month, 1).getDay();
	}

	buildStandardizedDateString(
		year: string,
		month: string,
		day: string
	): string {
		return `${year}/${month}/${day}`;
	}

	buildOffMonthDays(): Day[] {
		const numberOfDaysToOffset = this.getDaysOffsetCalendar();

		return Array.from(Array(numberOfDaysToOffset).keys())
			.map((day) => {
				const month = this.month - 1 < 0 ? 12 : this.month;
				const filledMonth = month.toString().padStart(2, "0");

				const lastDayOfPreviousMonth = new Date(
					this.year,
					month - 1,
					0
				).getDate();

				const calculatedDay = lastDayOfPreviousMonth - day;
				const filledDay = calculatedDay.toString().padStart(2, "0");

				return {
					date: this.buildStandardizedDateString(
						this.year.toString(),
						filledMonth,
						filledDay
					),
				};
			})
			.reverse();
	}
}

export default Time;
