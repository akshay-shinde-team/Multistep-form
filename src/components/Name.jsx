export function Name(props){



    return(
        <div>
        <div>
        <label>Full Name</label>
        <input type="text"
        value={props.name.fname}
        placeholder="Type Your Name"
        onChange={e => props.setName({...props.name, fname:e.target.value })}
        />
        {props.errors.fname && (<p className="error"> {props.errors.fname}</p>)}
        
        </div>
        <div>
            <label>DOB</label>
        <input type="date"
        value={props.name.dob}
        onChange={e => props.setName({...props.name , dob:e.target.value })}
        placeholder="" />
        </div> 
        </div>

    )
}