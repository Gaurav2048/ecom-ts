import React from 'react';
import { useFormik } from 'formik';

interface Values {
  email?: string;
  password?: string;
}

const labelStyle = {
  fontSize: '12px',
  fontWeight: '500',
};

const iptStyle = {
  padding: '9px',
  width: '90%',
  marginTop: '4px',
  marginBottom: '8px',
  borderRadius: '8px',
};

const buttonStyle = {
  width: '94%',
  background: 'palevioletred',
  outline: 'none',
  border: '0px',
  padding: '8px',
  color: 'white',
  borderRadius: '8px',
  fontWeight: '500',
  fontSize: '18px',
  marginTop: '15px',
};

const validate = (values: Values) => {
  const errors: Values = {};
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = 'Must be 8 characters or more ';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      Sign Up form
      <form onSubmit={formik.handleSubmit}>
        <label style={labelStyle} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter Email"
          style={iptStyle}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label style={labelStyle} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="text"
          style={iptStyle}
          placeholder="Enter Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
