import React from 'react';
import '../common/style.css';
import "../common/css/reset.css";
import "../common/css/common.css";
import RouterView from 'router'
import { BrowserRouter as Router} from 'react-router-dom'  //名字 路由  替换div

class App extends React.Component{
    render(){
        return <div className="Index">
        <Router>
            <RouterView/>
        </Router>
        </div>
    }
}
export default App;