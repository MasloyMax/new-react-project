import React from "react";
import styleDialog from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Massage from "./Massage/Massage";

let dialogData:any = [
    {name: 'igor', id: '1'},
    {name: 'Misha', id: '2'},
    {name: 'Masha', id: '3'},
    {name: 'Tanya', id: '4'}
];

let massageData =[
    {massage: 'hello'},
    {massage: 'Hi'},
    {massage: 'so hi'}
]

const Dialogs = (props:any) => {
    let createDialog = dialogData.map((a:any) => <Dialog name={a.name}/>)
    let createMassage = massageData.map((a:any) =><Massage massage={a.massage}/>)
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