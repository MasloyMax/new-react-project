import React from "react";
import styleMassage from './Massage.module.css'

const Massage = (props: any) => {
    return (
        <div>
            <div className={styleMassage.massage_block}>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Massage;