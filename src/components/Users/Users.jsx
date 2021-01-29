import React from 'react';
import styles from './users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return <div>

        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       pageSize={15}/>
        </div>
        <div className={styles.userBlocks}>
            {props.users.map(u => <User UsersInFollowingProgress={props.UsersInFollowingProgress}
                                        follow={props.follow}
                                        unfollow={props.unfollow} user={u}/>)}
        </div>
    </div>
}

export default Users;