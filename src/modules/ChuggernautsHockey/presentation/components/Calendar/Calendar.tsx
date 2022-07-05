/* eslint-disable max-len */
import React, { useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import CalendarEvent from "modules/ChuggernautsHockey/presentation/components/CalendarEvent";

import Time, { Day } from "@domain/utility/CalendarUtil/calendarUtil";
import { classNames } from "@domain/utility/cssUtil";
import { dummyScheduledEvents as scheduledEvents } from "@domain/utility/CalendarUtil/calendarUtil";

const time = new Time();

const Calendar = (): JSX.Element => {
	const [dates, setDates] = useState<Day[] | []>([]);
	const [selectedDate, setSelectedDate] = useState<string>("");

	const eventCheck = (day: string): boolean => {
		return Boolean(
			scheduledEvents.filter((event) => event.date === day).length
		);
	};

	const renderScheduleText = (): string => {
		if (selectedDate) {
			return `Schedule for ${new Date(
				selectedDate.replace("-", "/")
			).toDateString()}`;
		}

		return "Select date to view schedule";
	};

	React.useEffect(() => {
		const datesForThisMonth = time.buildThisMonthsDates(selectedDate);
		setDates(datesForThisMonth);
	}, [selectedDate]);

	return (
		<div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
			<div className="md:pr-14 min-w-[305px]">
				<div className="flex items-center">
					<h2 className="flex-auto font-semibold text-gray-900">
						{`${time.months[time.month]} ${time.year}`}
					</h2>
					<button
						type="button"
						className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">Previous month</span>
						<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
					</button>
					<button
						type="button"
						className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">Next month</span>
						<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</div>
				<div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
					<div>S</div>
					<div>M</div>
					<div>T</div>
					<div>W</div>
					<div>T</div>
					<div>F</div>
					<div>S</div>
				</div>
				<div className="mt-2 grid grid-cols-7 text-sm">
					{dates.map((day: Day, dayIdx) => (
						<div
							key={day.date}
							className={classNames(
								dayIdx > 6 && "border-t border-gray-200",
								"py-2"
							)}
						>
							<button
								type="button"
								className={classNames(
									day.isSelected && "text-white",
									!day.isSelected && day.isToday && "text-indigo-600",
									!day.isSelected &&
										!day.isToday &&
										day.isCurrentMonth &&
										"text-gray-900",
									!day.isSelected &&
										!day.isToday &&
										!day.isCurrentMonth &&
										"text-gray-400",
									day.isSelected && day.isToday && "bg-indigo-600",
									day.isSelected && !day.isToday && "bg-gray-900",
									!day.isSelected && "hover:bg-gray-200",
									(day.isSelected || day.isToday) && "font-semibold",
									"mx-auto flex h-8 w-8 items-center justify-center rounded-full",
									// Probably add a theme object for this color, I dunno we'll do theming later
									eventCheck(day.date) && "bg-[#a49247]"
								)}
								value={day.date}
								onClick={() => {
									setSelectedDate(day.date);
								}}
							>
								<time dateTime={day.date}>
									{time.transformDayStringToDayDigits(day.date)}
								</time>
							</button>
						</div>
					))}
				</div>
			</div>
			<section className="mt-12 md:mt-0 md:pl-14">
				<h2 className="font-semibold text-gray-900">
					<time dateTime={selectedDate}>{renderScheduleText()}</time>
				</h2>
				<ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
					{scheduledEvents
						.filter((event) => event.date === selectedDate)
						.map((event) => {
							return (
								<CalendarEvent
									key={event.id}
									id={event.id}
									name={event.name}
									imageUrl={event.imageUrl}
									date={event.date}
									start={event.start}
									startDatetime={event.startDatetime}
									end={event.end}
									endDatetime={event.endDatetime}
								/>
							);
						})}
				</ol>
			</section>
		</div>
	);
};

export default Calendar;
