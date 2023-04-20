import { useDispatch } from 'react-redux';
import { updateValue } from '../features/value';

export const ComponentB = () => {
    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(updateValue(event.target.value));
    }

    return (
        <div className="component-b">
            <input type="text" onChange={handleChange} />
        </div>
    );
}

export default ComponentB;
