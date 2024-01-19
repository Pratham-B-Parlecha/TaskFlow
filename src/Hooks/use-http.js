import { useEffect, useState } from "react";

export default function useHttp(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        async function sendRequest() {
            setIsLoading(true);
            const Response = await fetch(url);

            if(!Response.ok){
                setError("Failed to load Data");
            }
            const resData = await Response.json();
            const ArrayResData = Object.values(resData)
            setData(ArrayResData);
            setIsLoading(false);
        }

        sendRequest();
    }, [url])

    return {data, error, isLoading}
}