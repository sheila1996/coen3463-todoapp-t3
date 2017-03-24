import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './../components/App';
import Register from './../components/register.js';
import login from './../components/login.js';
import notes from './../components/note.js';
import List from './../components/List.js';

var routes = (
<Router history = {browserHistory}>
	<Route path='/' component={App}>
		<IndexRoute component={Register}/>
		<Route path='login' component={login} />
		<Route path='notes' component={notes} />
		<Route path='list' component={List} />
	</Route>
</Router>

)



export default routes;