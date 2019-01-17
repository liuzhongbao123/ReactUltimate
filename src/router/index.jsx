//有且只能有一个router
import React from 'react';
import Routes from './routes'
import RouteMap from './map'
import '../common/style.css';
class RouterView extends React.Component{
    render(){
        const {routes}=this.props;
        return <div className="RouterMap">
                 <RouteMap routes={routes===undefined?Routes:routes}></RouteMap>  
        </div>
    }
}
export default RouterView;