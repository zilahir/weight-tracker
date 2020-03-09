import React from 'react'
import PropTypes from 'prop-types'

import { formatWeight, formatDate } from '../../../utils/formatters'

/**
* @author
* @function Weight
* */

const Weight = props => {
	const { weight, date } = props
	return (
		<li>
			<span>
				{`${formatWeight(parseFloat(weight))} kg`}
			</span>
			<span>
				{
					formatDate(date)
				}
			</span>
		</li>
	)
}

Weight.propTypes = {
	date: PropTypes.instanceOf(Date).isRequired,
	weight: PropTypes.number.isRequired,
}

export default Weight
