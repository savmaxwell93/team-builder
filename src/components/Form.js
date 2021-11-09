import React from 'react';

function Form (props) {

    const { values, update, submit } = props

    const onChange = evt => {
        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-inputs'>
                <label>Username:
                    <input
                        type='text'
                        name='username'
                        value={values.username}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role:
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>-- Select Your Role --</option>
                        <option value='Tank'>Tank</option>
                        <option value='Healer'>Healer</option>
                        <option value='Melee DPS'>Melee DPS</option>
                        <option value='Ranged Magical DPS'>Ranged Magical DPS</option>
                        <option value='Ranged Physical DPS'>Ranged Physical DPS</option>
                    </select>
                </label>
    
                <div className='submit'>
                    <button disabled={!values.username || !values.email || !values.role}>Join Team!</button>
                </div>
            </div>
        </form>
    )
}


export default Form;