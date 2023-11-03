
import Subheader from './Subheader';

function Header(props)
{
    return (
        <>
        <b>Welcome {props.name}</b>
        
        <button onClick={props.addfivevalue}>add_five_value</button>
       <h5> {props.addata}
       <Subheader  subname="NagerCoil" add_data={props.addata} addfunction={props.addfivevalue} subheaderdata={props.name}/>
       </h5>
        </>
        )
}
export default Header
