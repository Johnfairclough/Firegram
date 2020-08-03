import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

Const useStorage = (file) => {
    const [progress, setProgress] = usestate(0);
    const [error, setError] = usestate(null);
    const [url, Seturl] = useState(null);

useEffect(() => {
    // references 
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on('state_changed', (snap) => {
        let percentage = (snap.byteTransferred / snap.totalBytes * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            Seturl(url);
        })
    }, [file]);

    return { progress, url, error }
}

export default useStorage;
     