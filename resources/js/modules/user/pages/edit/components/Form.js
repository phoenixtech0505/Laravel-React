import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'UserFrom'
const propTypes = {
  user: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ user, errors, onChange, onSubmit }) => {
  return <form onSubmit={e => onSubmit(e)}>
    <div className="form-group row">
      <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
      <div className="col-sm-10">
        <input type="text"
               id="name"
               name="name"
               className={`form-control ${errors.has('name') && 'is-invalid'}`}
               placeholder="Full Name"
               value={user.name || ''}
               onChange={e => onChange(e.target.name, e.target.value)} />
        {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="email"
               id="email"
               name="email"
               className={`form-control ${errors.has('email') && 'is-invalid'}`}
               placeholder="Email"
               value={user.email || ''}
               onChange={e => onChange(e.target.name, e.target.value)}/>
        {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="address" className="col-sm-2 col-form-label">address</label>
      <div className="col-sm-10">
        <input type="text"
               id="address"
               name="address"
               className={`form-control ${errors.has('address') && 'is-invalid'}`}
               placeholder="address"
               value={user.address || ''}
               onChange={e => onChange(e.target.name, e.target.value)}/>
        {errors.has('address') && <div className="invalid-feedback">{errors.first('address')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="about" className="col-sm-2 col-form-label">About</label>
      <div className="col-sm-10">
        <textarea id="about"
                  name="about"
                  className={`form-control ${errors.has('about') && 'is-invalid'}`}
                  rows="3"
                  placeholder="About"
                  value={user.about || ''}
                  onChange={e => onChange(e.target.name, e.target.value)} />
        {errors.has('about') && <div className="invalid-feedback">{errors.first('about')}</div>}
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-10 ml-auto">
        <button disabled={errors.any()} type="submit" className="btn btn-primary">Update</button>
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
