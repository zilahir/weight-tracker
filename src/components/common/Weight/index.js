import React from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @function Weight
* */

const Weight = props => {
	const { weight, date } = props
	return (
		<li>
			<span>
				{`${weight} kg`}
			</span>
			<span>
				{date}
			</span>
		</li>
	)
}

Weight.propTypes = {
	date: PropTypes.string.isRequired,
	weight: PropTypes.number.isRequired,
}

export default Weight
