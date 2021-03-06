import moment from 'moment'
import { groupBy } from 'lodash'

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
	moment(date).format('DD MMM')
)

export const getDiff = (start, end) => {
	let diff
	let sign
	if (start > end) {
		diff = start - end
		sign = '-'
	} else {
		diff = end - start
		sign = '+'
	}
	return `${sign} ${diff}`
}

export const groupByWeek = weights => {
	const grouped = groupBy(weights, weight => moment(weight.selectedDate, 'YYYY-MM-DD').startOf('isoWeek').toString())
	const result = []
	Object.keys(grouped).map(curr => {
		const sum = grouped[curr].reduce((s, { weight }) => s + weight, 0)
		const avg = sum / grouped[curr].length
		result.push({
			weight: avg,
			selectedDate: curr,
		})
		return true
	})
	return result
}

export const groupByMonth = weights => {
	const grouped = groupBy(weights, weight => moment(weight.selectedDate, 'YYYY-MM-DD').startOf('month'))
	const result = []
	Object.keys(grouped).map(curr => {
		const sum = grouped[curr].reduce((s, { weight }) => s + weight, 0)
		const avg = sum / grouped[curr].length
		result.push({
			weight: avg,
			selectedDate: curr,
		})
		return true
	})
	return result
}

export const groupByYear = weights => {
	const grouped = groupBy(weights, weight => moment(weight.selectedDate, 'YYYY-MM-DD').startOf('year'))
	const result = []
	Object.keys(grouped).map(curr => {
		const sum = grouped[curr].reduce((s, { weight }) => s + weight, 0)
		const avg = sum / grouped[curr].length
		result.push({
			weight: avg,
			selectedDate: curr,
		})
		return true
	})
	return result
}
