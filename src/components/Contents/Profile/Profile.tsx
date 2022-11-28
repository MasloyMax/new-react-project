import styleProfile from './Profile.module.css'
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import PersonProfile from "./PersonProfile/PersonProfile";
import Post from './Post/Post';


const Profile = (props: any) => {
  return(
      <div>
          <HeaderProfile/>
          <PersonProfile ProfilePage={props.ProfilePage.personData}/>
          <Post text={props.state.posts}/>
      </div>
  )
}

export default Profile