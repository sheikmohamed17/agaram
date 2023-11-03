import App from "./App"
import Subheader from './Subheader';

function Header(props)
{
    return (
        <>
        <b>Welcome {props.name}</b>
        
       <Subheader  subname="NagerCoil"/>
        <button onClick={props.addfivevalue}>add_five_value</button>
        {props.addata}
        </>
        )
}
export default Header