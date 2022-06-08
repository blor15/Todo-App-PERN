import React, { Fragment, useState } from 'react';

const EditTodo = ({ todo }) => {

    const editText = async (id) => {
        try {

            const body = { description };

            const res = await fetch(`http://localhost:3001/todos/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err);
        }
    };

    const [description, setDescription] = useState(todo.description);

    return (
        <Fragment>

            <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            <div class="modal fade" id={`id${todo.todo_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit todo</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                            <button type="button" class="btn btn-primary" onClick={() => editText(todo.todo_id)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default EditTodo;