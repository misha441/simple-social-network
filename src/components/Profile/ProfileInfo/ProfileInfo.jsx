import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userIcon from '../../../assets/photos/user_icon.png';
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <div className={s.profileImg} style={{backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/559a80d5e4b04425d943147c/1439403579713-9SIXL2JDY0NUNCB91IKU/ke17ZwdGBToddI8pDm48kAiXG7UUCoVQylfgKB2t4HEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2djEDszr4K-E8jpXoyz6AgMt_LkUJ7baHP8d9iPpYzpluH3bqxw7fF48mhrq5Ulr0Hg/banner.jpg?format=2500w)"}}></div>
            <div className={s.descriptionBlock}>
                { !props.profile.photos.large ? <img src={userIcon} className={s.descriptionBlock__image}/>
                : <img src={props.profile.photos.large} className={s.descriptionBlock__image}/>}
                <div className={s.descriptionBlock__fullName}>{props.profile.fullName}</div>

                <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
                <br/>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;