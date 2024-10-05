import React from 'react';
function useLocalStorage(itemName, defaultValue) {

    const [item, setItem] = React.useState(defaultValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {

                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(defaultValue));
                    parsedItem = defaultValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);
            } catch (e) {
                setError(true);
                setLoading(false);
            }
        }, 2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage };