import { connect } from "react-redux";
import { handleLogin } from "../../store/actions/AuthAction";


const Login = ({dispatch}: {dispatch: any}) => {
    // console.log(auth);
    console.log(dispatch);
    
    
  return (
        <div>
            <button type="button" onClick={() => handleLogin(dispatch)}></button>
        </div>
  );
};

const mapStateToProps = (state: any) => ({
    auth: state.authReducer.auth
})

export default connect(mapStateToProps)<any>(Login);
