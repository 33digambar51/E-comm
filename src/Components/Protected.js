import{useHistory} from 'react-router-dom';
import{useEffect} from 'react';

function Protected(props){
    let Compo = props.cmp;
    //Check Localstorage, and then Redirect page
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem("login-info"))
        {
            history.push("./login");
            // history("/login");
        }
    },[])

    return(
        <div>
            <Compo/>
        </div>
    );
}
export default Protected;