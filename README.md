# day-planner

This application allows working people to schedule events in hour-long time blocks throughout the day.

The day planner displays the current date and time with the Moment.js Javascript time tools.

The planner includes rows for each hour of the workday, from 9:00 to 17:00 (using the 24-hour clock). If it is between 9 am and 5 pm, the current row is displayed in green.
Past time blocks are displayed in gray, and future time blocks are displayed in white. If it is prior to 9 am, all rows are white, and if it is after 5 pm, all rows are gray.