import React from 'react'

const ExcerciseForm = ({ onChange, onSubmit, form }) => (
    <div className="container">
        <form 
            onSubmit = { onSubmit }
        >
            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="title"
                    name ="title"
                    onChange={ onChange }
                    value = { form.title }
                />
            </div>
            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="description"
                    name ="description"
                    onChange={ onChange }
                    value = { form.description }
                />
            </div>
            <div className="form-group">
                <input 
                    className="form-control"
                    type="text"
                    placeholder="img"
                    name ="img"
                    onChange={ onChange }
                    value = { form.img }
                />
            </div>
            <div className="form-row">
                <div className="col-6">
                    <input 
                        className="form-control"
                        type = "text"
                        placeholder = "leftColor"
                        name ="leftColor"
                        onChange={ onChange }
                        value = { form.leftColor }
                    />
                </div>
                <div className="col-6">
                    <input 
                        className="form-control"
                        type = "text"
                        placeholder = "rightColor"
                        name ="rightColor"
                        onChange={ onChange }
                        value = { form.rightColor }
                    />
                </div>
            </div>
            <br/>
            <button
                type="submit"
                className="btn btn-primary"
            >
            Submit
            </button>
        </form>
    </div>
)

export default ExcerciseForm;