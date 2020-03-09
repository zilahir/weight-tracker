import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './components/Pages/Home'

const App = () => (
	<div>
		<Router>
			<Route path="/" exact component={Home} />
		</Router>
	</div>
)

export default App
