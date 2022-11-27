import stylePersonProfile from './PersonProfile.module.css'

const PersonProfile = () => {
    return (
        <div className={stylePersonProfile.container}>
            <div>
                <img className={stylePersonProfile.img_profile}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbv7lqQPRt3y7j74zvh_eLo3zBMLmbgGqsxg&usqp=CAU"
                     alt=""/>
            </div>
            <div className={stylePersonProfile.person_info}>
                <h2>Максим</h2>
                <p>год</p>
                <p>увлечения</p>
                <p>сайт</p>
                <p>О себе</p>
            </div>
        </div>
    )
}

export default PersonProfile