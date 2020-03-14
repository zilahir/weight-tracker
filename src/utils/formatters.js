import moment from 'moment'

export const formatDate = date => {
	const d = moment(date)
	let formattedDate
	if (d.isSame(moment(), 'day')) {
		formattedDate = `today at ${moment(d).format('H:mm')}`
	} else if (d.isSame(moment().subtract(1, 'day'), 'day')) {
		formattedDate = `yesterday at ${moment(d).format('H:mm')}`
	} else {
		formattedDate = `${moment(d).format('DD MMM YYYY H:mm')}`
	}
	return formattedDate
}

export const formatWeight = weight => (
	weight.toFixed(1)
)

export const formatXAxis = date => (
	moment(date).format('YYYY-MM-DD')
)
