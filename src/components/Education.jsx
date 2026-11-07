export function Education(props){
   

    return(
    <div>
        <div>
        <label>Higher Qualification</label>
        <input type="text"
        value={props.education.hqualification}
        placeholder="Type Your Full address"
        onChange={e => props.setEducation({...props.education, hqualification:e.target.value })}
        />
        {props.errors.hqualification && (<p className="error"> {props.errors.hqualification}</p>)}
        
        </div>
        <div>
        <label>University Name</label>
        <input type="text"
        value={props.education.uname}
        onChange={e => props.setEducation({...props.education , uname:e.target.value })}
        placeholder="" />
        {props.errors.uname && (<p className="error"> {props.errors.uname}</p>)}

        </div> 
        </div>
    );
}
