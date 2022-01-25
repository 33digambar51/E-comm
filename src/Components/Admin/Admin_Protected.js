import{useHistory} from 'react-router-dom';
import{useEffect} from 'react';

function Admin_Protected(props){
    let Compo = props.cmp;
    //Check Localstorage, and then Redirect page
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem("admin-login-info"))
        {
            history.push("./admin");
            // history("/login");
        }
    },[])

    return(
        <>
            <Compo/>
        </>
    );
}
export default Admin_Protected;