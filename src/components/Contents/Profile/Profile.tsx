import styleProfile from './Profile.module.css'
import HeaderProfile from "./HeaderProfile/HeaderProfile";
import PersonProfile from "./PersonProfile/PersonProfile";
import Post from './Post/Post';


const Profile = (props: any) => {
  return(
      <div>
          <HeaderProfile/>
          <PersonProfile state={props.state.personData}/>
          <Post/>
      </div>
  )
}

export default Profile