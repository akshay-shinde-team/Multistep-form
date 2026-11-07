export function Address(props){

    return(
    <div>
        <div>
        <label>Full Address</label>
        <input type="text"
        value={props.address.faddress}
        placeholder="Type Your Full address"
        onChange={e => props.setAddress({...props.address, faddress:e.target.value })}
        />
        {props.errors.faddress && (<p className="error"> {props.errors.faddress}</p>)}
        
        </div>
        <div>
        <label>PinCode</label>
        <input type="text"
        value={props.address.pincode}
        onChange={e => props.setAddress({...props.address , pincode:e.target.value })}
        placeholder="" />
        {props.errors.pincode && (<p className="error"> {props.errors.pincode}</p>)}

        </div> 
        </div>
    );
}