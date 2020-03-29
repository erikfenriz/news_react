import {useState} from 'react';
import api from "../api/api";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const getApi = async (url = "") => {
        try {
            const response = await api.get(url);
            setErrorMessage("");
            setResults(response.data[0]);
        } catch (err) {
            setErrorMessage("Server request failed");
        }
    };

    return [getApi, results, errorMessage];
}
