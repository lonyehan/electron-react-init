// libaries
import { hot } from 'react-hot-loader/root';
import React, {Component} from 'react'
import ReactDOM from 'react-dom'


// Components
// import App from './containers/app.jsx'
import Nav from './components/nav.jsx'

// Other files
import './css/app.css'

export default class App extends Component{

    render(){
        return(
            <Nav/>
            // <div className='hello'>Hello World!</div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('App'))