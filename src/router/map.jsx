import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'  //名字 路由  替换div
import '../common/style.css';
class RouteMap extends React.Component{
    render(){
        const {routes}=this.props;
        const defaultRoute=<Route path='/' component={()=>{
            return <Redirect to='/home'/>
        }} key={1} exact></Route>
        return <div className="Map">
        <Switch>
        {
            routes.map((item,index)=>{
                const Comp=item.component;
                return <Route path={item.path} component={(apiRouter)=>{
                    return <Comp routes={item.children} {...apiRouter}></Comp>
                }} key={index}></Route>  
            }).concat(defaultRoute)
        }
           
        </Switch>
            
        </div>
    }
}
export default RouteMap;