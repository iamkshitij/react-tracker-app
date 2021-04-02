

const Add = () =>{
    return(
        <form className='add-form'>
            <div className='form-control'>
                <label>Tasks</label>
                <input type='text' placeholder='Enter task name'/>
            </div>

            <div className='form-control'>
                <label>Date & Time</label>
                <input type='text' placeholder='Add Date and Time'/>
            </div>

            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'/>
            </div>
            <input type='submit' value='save task' className='btn btn-block'/>
        </form>
    );

}

export default Add;