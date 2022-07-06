import React, { useState} from "react";

export const Form = () => {
    const [todo,setTodo] = useState<string[]>([]);
    const [todoDesc,setTodoDesc] = useState<string[]>([]);

    const [doing,setDoing] = useState<string[]>([]);
    const [doingDesc,setDoingDesc] = useState<string[]>([]);

    const [done,setDone] = useState<string[]>([]);
    const [doneDesc,setDoneDesc] = useState<string[]>([]);

    const [title,setTitle] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const [status,setStatus] = useState<string>('');

    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>):void => {
        e.preventDefault();

        if(status == "1"){
            setTodo(prevTodo => [...prevTodo,title]);
            setTodoDesc(prevTodoDesc => [...prevTodoDesc,description])
        }
        if(status == "2"){
            setDoing(prevDoing => [...prevDoing,title]);
            setDoingDesc(prevDoingDesc => [...prevDoingDesc,description])
        }
        if(status == "3"){
            setDone(prevDone => [...prevDone,title]);
            setDoneDesc(prevDoneDesc => [...prevDoneDesc,description])
        }

        setTitle('');
        setDescription('');
        setStatus('');
    };

    return (
        <>
        <div className="mt-3 row d-flex justify-content-center">
            <div className="p-3 col-md-6" id="div-container">
                <div className="text-center row justify-content-center">
                    <h3 className="display-4">Add</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            onChange={(e: React.FormEvent<HTMLInputElement>):void => setTitle(e.currentTarget.value)}
                            value={title}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            onChange={(e: React.FormEvent<HTMLInputElement>):void => setDescription(e.currentTarget.value)}
                            value={description}/>
                    </div>
                    <div className="mb-3">
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>):void => setStatus(e.target.value)}
                            value={status}>
                            <option selected>Status</option>
                            <option value="1">To do</option>
                            <option value="2">Doing</option>
                            <option value="3">Done</option>
                        </select>
                    </div>
                    <button className="btn btn-secondary" type="submit" id="submit-button">Submit</button>
                    <button className="btn btn-secondary" type="reset">Cancel</button>
                </form>
            </div>
        </div>

    <div className="mt-3 row">
        <div className="col-sm-4">
            <div className="p-3 card">
                <div className="text-center row justify-content-center">
                    <h3 className="display-4">To do</h3>
                </div>
                <div className="card-body" id="c-body">
                    <p>{todo}</p>
                    <p>{todoDesc}</p>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="p-3 card">
                <div className="text-center row justify-content-center">
                    <h3 className="display-4">Doing</h3>
                </div>
                <div className="card-body" id="c-body">
                    <p>{doing}</p>
                    <p>{doingDesc}</p>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="p-3 card">
                <div className="text-center row justify-content-center">
                    <h3 className="display-4">Done</h3>
                </div>
                <div className="card-body" id="c-body">
                    <p>{done}</p>
                    <p>{doneDesc}</p>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};