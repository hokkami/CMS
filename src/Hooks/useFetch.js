import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [features, setFeatures] = useState([]);
    const [isPending , setIsPending] = useState(true);

    useEffect(async () => {
        await setTimeout(() => {
             fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setFeatures(Object.entries(data));
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    return { features ,isPending };
}
