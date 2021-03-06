import { useState, useEffect } from "react";
import axios from "axios";

export default function RequestData(link, initialState) {
    const [listTrips, setListTrips] = useState(initialState)

    useEffect(() => {
        getListTrips()
    }, [link])

    const getListTrips = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ronilson-souza-gebru${link}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })

            .then((res) => {
                setListTrips(res.data.trips)
            })
            .catch(() => { })

    }
    return listTrips
}