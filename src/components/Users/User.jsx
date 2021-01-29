import React from 'react';
import styles from './users.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/photos/user_icon.png";

const User = (props) => {
    return (
        <div key={props.user.id} className={styles.userBlock}>
            <div>
                <div>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>{props.user.followed ?
                    <button disabled={props.UsersInFollowingProgress.some(id => id == props.user.id)}
                            className={styles.followBtn} onClick={() => {
                        props.unfollow(props.user.id)
                    }}>unfollow</button> :
                    <button disabled={props.UsersInFollowingProgress.some(id => id == props.user.id)}
                            className={styles.followBtn} onClick={() => {
                        props.follow(props.user.id)
                    }}>follow</button>}</div>
            </div>
            <div className={styles.userBlock__info}>
                <div>
                    <div className={styles.userBlock__fullName}>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </div>
                <div>
                    {'props.user.location.countryName'},<br/>
                    {'props.user.location.cityName'}
                </div>
            </div>
        </div>
    )
}

export default User;