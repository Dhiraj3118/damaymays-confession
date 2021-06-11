import React, { useEffect, useState } from 'react'
import Confession from './Confession';
import db from '../firebase'

const Confessions = () => {
    const [confessions, setConfessions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.collection("confessions").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setConfessions(snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    data: doc.data()
                };
            })
            )
            setLoading(false);
        })
    }, [])

    // const deleteConfession = (id) => {
    //     db.collection("confessions").doc(id).delete();
    // }

    return (
        <div>
            {loading && <div className="loading"></div>}
            {
                !loading && <div >
                    <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>Admin Dashboard</h1>
                    <div className="admin-dashboard">
                        {
                            confessions.map(conf => {
                                return (<Confession key={conf.id} conf={conf} />)
                            })
                        }
                    </div>
                </div >
            }
            {
                !loading && (confessions.length === 0) && <h1 style={{ textAlign: 'center' }}>No Confessions</h1>
            }
        </div >

    )
}

export default Confessions;