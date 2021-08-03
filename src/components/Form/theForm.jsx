import { usestate } from 'react';


const theForm = (callback) => {
    const [values, setvalues] = useState({});

    

    const handleChange = (event) => {
        event.persist();
        setvalues({...values, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        callback();
    };
    return { values, handleChange, handleSubmit }
};

export default theForm