import React from 'react';
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/formControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let onSendMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messeges}>
                {messagesElements}
                <div className={s.sendingField}>

                    <AddMessageReduxForm onSubmit={onSendMessage}/>

                </div>
            </div>
        </div>
    )
}


const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={'newMessageBody'} className={s.dialogs__textArea}
                       validate={[required,maxLength50]} placeholder={'Enter new message'}/>
            </div>
            <div>
                <button className={s.dialogs__tsendButton}>SEND</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;