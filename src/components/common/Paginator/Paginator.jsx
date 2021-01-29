import React, {useState} from 'react';
import styles from "./Paginator.module.css";

const Paginator = React.memo((props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / props.pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = props.pageSize * (portionNumber - 1) + 1;
    let rightPortionPageNumber = props.pageSize * portionNumber;

    return (
        <div className={styles.paginatorWrapper}>

            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            <div className={styles.pageNumbersBlock}>
                {pages
                    .filter(p => p <= rightPortionPageNumber && p >= leftPortionPageNumber)
                    .map(p => {
                        return <span key={p}
                                     className={`${props.currentPage === p && styles.selectedPage} ${styles.pageNumbers}`}
                                     onClick={() => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    })
                }
            </div>

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}

        </div>
    )
});

export default Paginator;