# day-planner

This application allows working people to schedule events in hour-long time blocks throughout the day.

The day planner displays the current date and time with the Moment.js Javascript time tools.

The planner includes rows for each hour of the workday, from 9:00 to 17:00 (using the 24-hour clock). If it is between 9 am and 5 pm, the current row is displayed in green.
Past time blocks are displayed in gray, and future time blocks are displayed in white. If it is prior to 9 am, all rows are white, and if it is after 5 pm, all rows are gray.

The user can write in events/notes into the input box corresponding with the hour-long time block of his/her choice (which include placeholders stating, "Type an event here.").
Upon hitting the "save" button to the right of the input (on its same row), the user saves the input to local storage. This allows the input text to persist, even when the page
is refreshed. The text can be edited and saved at any time, as long as the "save" button is pressed after changes are made.