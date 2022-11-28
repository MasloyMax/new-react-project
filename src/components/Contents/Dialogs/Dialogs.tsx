import React from "react";
import styleDialog from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Massage from "./Massage/Massage";

const Dialogs = (props:any) => {
    let createDialog = props.state.dialogData.map((a:any) => <Dialog name={a.name}/>)
    let createMassage = props.state.massageData.map((a:any) =><Massage massage={a.massage}/>)
    return (
        <div className={styleDialog.dialog_block}>
            <div>
                {createDialog}
            </div>
            <div>
                {createMassage}
            </div>
        </div>
    )
}

export default Dialogs;