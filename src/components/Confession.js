import React from 'react'
import db from '../firebase';

const Confession = ({ conf }) => {

    const deleteConfession = (id) => {
        db.collection("confessions").doc(id).delete();
    }

    const readConfession = (id) => {
        db.collection("confessions").doc(conf.id).update({
            read: true
        })
    };

    const getDate = (secs) => {
        const dateObj = new Date(secs * 1000);
        let hours = dateObj.getHours();
        hours = hours >= 10 ? hours : '0' + hours;
        let minutes = dateObj.getMinutes();
        minutes = minutes >= 10 ? minutes : '0' + minutes;
        let seconds = dateObj.getSeconds();
        seconds = seconds >= 10 ? seconds : '0' + seconds;
        let date = dateObj.getDate();
        date = date >= 10 ? date : '0' + date;
        let month = dateObj.getMonth() + 1;
        month = month >= 10 ? month : '0' + month;
        let year = dateObj.getFullYear();
        return `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`
    }

    let classes = conf.data.read ? "confession read" : "confession unread";

    return (
        <div className={classes}>
            <p className="conf">{conf.data.confession}</p>
            <p className="date">~ {getDate(conf.data.timestamp.seconds)}(IST)</p>
            {!conf.data.read && <button className="read" onClick={() => readConfession(conf.id)}>Read</button>}
            <button className="delete" onClick={() => deleteConfession(conf.id)}>Delete</button>
        </div>
    )
}

export default Confession;