import styleProfile from './Profile.module.css'
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import PersonProfile from "./PersonProfile/PersonProfile";
import Post from './Post/Post';


const Profile = (props: any) => {
    debugger
  return(
      <div>
          <HeaderProfile/>
          <PersonProfile ProfilePage={props.ProfilePage.personData}/>
          <Post/>
      </div>
  )
}

export default Profile