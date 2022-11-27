import stylePersonProfile from './PersonProfile.module.css'

const PersonProfile = (props:any) => {
    debugger
    return (
        <div className={stylePersonProfile.container}>
            <div>
                <img className={stylePersonProfile.img_profile}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbv7lqQPRt3y7j74zvh_eLo3zBMLmbgGqsxg&usqp=CAU"
                     alt=""/>
            </div>
            <div className={stylePersonProfile.person_info}>
                <h2>{props.ProfilePage[0].name}</h2>
                <p>{props.ProfilePage[1].yars}</p>
                <p>{props.ProfilePage[2].hobbies}</p>
                <p>{props.ProfilePage[3].site}</p>
                <p>{props.ProfilePage[4].aboutMyself}</p>
            </div>
        </div>
    )
}

export default PersonProfile