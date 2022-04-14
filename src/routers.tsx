import { useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import Profile from './pages/profile/Profile'
import { handleLogin } from './store/actions/AuthAction'
import { connect } from 'react-redux'
import Login from './pages/login/Login'


function Routers({auth}: {auth: any}, {dispatch}: {dispatch: any}) {
    


    // useEffect(() => {
    //     console.log(auth);

    //     handleLogin(dispatch)
    // })
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Profile />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  )
}

const mapStateToProps = (state: any) => ({
    auth: state.authReducer.auth
})


export default connect(mapStateToProps)<any>(Routers)