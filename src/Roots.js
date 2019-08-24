import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './App'

class Roots extends React.Component {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/posts" component={ Home }/>
                        <Route exact path="/users" component={ Home }/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Roots;