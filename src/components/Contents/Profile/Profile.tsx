import styleProfile from './Profile.module.css'
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import PersonProfile from "./PersonProfile/PersonProfile";
import Post from './Post/Post';

const Profile = () => {
  return(
      <div>
          <HeaderProfile/>
          <PersonProfile/>
          <Post/>
      </div>
  )
}

export default Profile