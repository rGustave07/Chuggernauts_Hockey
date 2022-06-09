/* eslint-disable max-len */
// Write Utilities required to run calendar component
export interface Day {
	date: string;
	isCurrentMonth?: boolean;
	isSelected?: boolean;
	isToday?: boolean;
}

export interface DayEvent {
	id: number;
	name: string;
	imageUrl: string;
	date: string;
	start: string;
	startDatetime: string;
	end: string;
	endDatetime: string;
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

	static convertISODateStringToCommon = (isoDateString: string): string => {
		const dateObj = new Date(isoDateString);
		const year = dateObj.getFullYear().toString();
		const month = dateObj.getMonth().toString().padStart(2, "0");
		const day = dateObj.getDate().toString().padStart(2, "0");

		return `${year}-${month}-${day}`;
	};

	padDigitWithZero = (num: number | string): string => {
		return num.toString().padStart(2, "0");
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

	transformDayStringToDayDigits = (dateString: string): string => {
		const lastSegmentOfDateString = dateString.split("/").pop();

		return lastSegmentOfDateString?.replace(/^0/, "") ?? "";
	};

	buildThisMonthsDates = (selectedDate: string): Day[] => {
		const monthDays = new Date(this.year, this.month + 1, 0).getDate();
		const generatedDates: Day[] = Array.from(Array(monthDays)).map(
			(e, dayNumber) => {
				const dateString = this.buildStandardizedDateString(
					this.year.toString(),
					this.padDigitWithZero(this.month + 1),
					this.padDigitWithZero(dayNumber + 1)
				);

				return {
					date: dateString,
					isCurrentMonth: true,
					isToday: new Date().getDate() === dayNumber + 1,
					isSelected: dateString === selectedDate,
				};
			}
		);

		const builtDates = [...this.buildOffMonthDays(), ...generatedDates];
		return builtDates;
	};

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

export const dummyScheduledEvents: DayEvent[] = [
	{
		id: 1,
		name: "Ritter Gustave",
		imageUrl:
			"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown",
		date: "2022/05/28",
		start: "1:00 PM",
		startDatetime: "2022-01-21T13:00",
		end: "2:30 PM",
		endDatetime: "2022-01-21T14:30",
	},
	{
		id: 2,
		name: "Jake Hamilton",
		imageUrl:
			"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown",
		date: "2022/05/21",
		start: "1:00 PM",
		startDatetime: "2022-01-21T13:00",
		end: "2:30 PM",
		endDatetime: "2022-01-21T14:30",
	},
	{
		id: 2,
		name: "Eric Schwartz",
		imageUrl:
			"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown",
		date: "2022/05/05",
		start: "1:00 PM",
		startDatetime: "2022-01-21T13:00",
		end: "2:30 PM",
		endDatetime: "2022-01-21T14:30",
	},
	{
		id: 2,
		name: "Jason Davis",
		imageUrl:
			"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Brown",
		date: "2022/05/11",
		start: "1:00 PM",
		startDatetime: "2022-01-21T13:00",
		end: "2:30 PM",
		endDatetime: "2022-01-21T14:30",
	},
];

export default Time;
