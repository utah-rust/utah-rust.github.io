'use strict';

function nextNthWeekday(date, numDay, occurance) {
	// weekday starts at 0
	// month starts at 0
	// date... starts at 1
	numDay = parseInt(numDay, 10);
	occurance = parseInt(occurance, 10);
	if (!(occurance >= 1 && occurance <= 5)) {
		throw new Error('occurance must be >= 1 and <= 5');
	}
	if (!(numDay >= 0 && numDay <= 7)) {
		throw new Error('weekday must be >= 0 and <= 7');
	}
	numDay = numDay % 7;

	var yyyy = date.getFullYear();
	var m = date.getMonth();
	var d = 1; // date.getDate();
	var di = 0;
	var day;
	var next;
	var count = 0;
	while (di < occurance /*&& d <= 31*/) {
		count += 1;
		if (count > 1000) {
			console.error('error with date calculation (infinite loop)');
			break;
		}
		next = new Date(
			yyyy,
			m,
			d,
			date.getHours(), // TODO do we ever need to account for daylight savings?
			date.getMinutes(),
			date.getSeconds(),
			date.getMilliseconds()
		);
		if (next.getMonth() !== m) {
			di = 0;
			m = next.getMonth();
		}
		day = next.getDay();
		// TODO (it's just past think-o-clock)
		// count the diff
		// count up by diff + 7
		if (numDay === day) {
			di += 1;
			d += 7;
		} else {
			d += 1;
		}
		if (di === occurance) {
			if (next.valueOf() >= date.valueOf()) {
				return next;
			}
			m = next.getMonth() + 1;
			d = 1;
			di = 0;
		}
	}
	return null;
}

var months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
var weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

function announce($el, date) {
	$el.querySelector('.js-year').innerText = date.getFullYear();
	$el.querySelector('.js-month').innerText = months[date.getMonth()];
	$el.querySelector('.js-date').innerText = ordinal(date.getDate());
	$el.querySelector('.js-weekday').innerText = weekdays[date.getDay()];
}

// Second Thursday of each Month
var next = nextNthWeekday(new Date(), 4, 2);
var nextNext = nextNthWeekday(
	new Date(next.getFullYear(), next.getMonth(), next.getDate() + 1),
	4,
	2
);

// Handler when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
	announce(document.body.querySelector('.js-next-meetup'), next);
	announce(document.body.querySelector('.js-next-next-meetup'), nextNext);
	document.body.querySelector('.js-meetups').hidden = false;
});

var ordinals = new Intl.PluralRules('en', { type: 'ordinal' });
var suffixes = { one: 'st', two: 'nd', few: 'rd', other: 'th' };

function ordinal(number) {
	var suffix = suffixes[ordinals.select(number)];
	return number + suffix;
}
