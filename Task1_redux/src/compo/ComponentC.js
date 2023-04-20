import { useSelector } from 'react-redux';

export const ComponentC= () =>{
    const value = useSelector((state) => state.value);

    return (
        <div className="component-c">
            <p>{value}</p>
        </div>
    );
}

export default ComponentC;
