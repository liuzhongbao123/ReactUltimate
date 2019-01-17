import { Pagination } from 'antd';
import 'antd/dist/antd.css';

class Pagination extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            current :3,
        }
    }
    onChange = (page) => {
        console.log(page);
        this.setState({
        current: page,
        });
    }
    render(){
        return <div>
            <Pagination current={this.state.current} onChange={this.onChange} defaultCurrent={6} total={50} />
        </div>
    }
}
export default Pagination