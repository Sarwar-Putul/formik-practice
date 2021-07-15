import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const OldYoutubeForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        },
        onSubmit: values => {
            console.log('form', values)
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            channel: Yup.string().required('Required')
        })
        
    })
    // console.log('form values', formik.values)
    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}  />
                    
                    {formik.touched.name && formik.errors.name ? (<div style= {{color: 'red'}}>{formik.errors.name}</div>) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}  />
                    
                    {formik.touched.email && formik.errors.email ? (<div style= {{color: 'red'}}>{formik.errors.email}</div>) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="channel">channel</label>
                    <input type="text" id="channel" name="channel" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}  />
                    
                    {formik.touched.channel && formik.errors.channel ? (<div style= {{color: 'red'}}>{formik.errors.channel}</div>) : null}
                </div>    
            
                <button type="submit">Submit</button>
            
            </form>
        </div>
    );
};

export default OldYoutubeForm;