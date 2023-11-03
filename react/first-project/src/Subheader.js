
function Subheader(props)
{
    return (
        <>
        <i>Place:{props.subname}</i>
        <i>{props.subheaderdata}</i>
        <h5><i>{props.add_data}</i></h5>
       <button onClick={props.addfunction}></button> 
        {/* <button onClick={()=>props.subheaderdata}>ADD Subheader</button> */}
        </>
    );
}
export default Subheader