import React from "react";
import {NavLink} from "react-router-dom";
import styleDialog from './Dialog.module.css'


const Dialog = (props: any) => {
    return (
        <div className={styleDialog.dialog_block}>
            <NavLink className={styleDialog.link} to={'dialog/1'}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;