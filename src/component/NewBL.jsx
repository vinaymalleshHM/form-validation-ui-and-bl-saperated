import React, { useState } from 'react'
import SignIn from './NewUI';

const passwordRegex = RegExp(
    /^.*(?=.{5,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
);
const genderRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

export default function NewBL() {
    const state = {
        email: null,
        password: null,
        formErrors: {
            email: "",
            password: ""
        }
    };

    const [stateval, setStateVal] = useState(state)
    const [genErr, setGenErr] = useState(false)
    const [pass, setPass] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
console.log("satae", stateval)
        if (formValid(stateval)) {
            console.log(stateval.email)
            console.log(stateval.password)

        } else {
            console.log("can't login");
            if (stateval.password !== null && stateval.email !== null) {
            }
            else {
                let formErrors = { ...stateval.formErrors };
                if (stateval.email === null) {
                    formErrors.email = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
                if (stateval.password === null) {
                    formErrors.password = "field is required"
                    setStateVal({ ...stateval, formErrors });
                }
            }
        }
    };

    const handleChange = e => {
        e.preventDefault();

        const { name, value } = e.target;

        let formErrors = { ...stateval.formErrors };
        switch (name) {
            case "email": if (value !== "") {
                formErrors.email = "";
                if (value.match(genderRegex)) {
                    formErrors.email = "";
                }
                else {
                    formErrors.email = "invalid email address"
                }
            }
            else {
                formErrors.email = "field can't be blank";
            }
                break;
            case "password": if (value !== "") {
                formErrors.password = "";
                if (value.length > 5) {
                    formErrors.password = "";
                    if (value.length < 10) {
                        formErrors.password = "";
                        if (value.match(passwordRegex)) {
                            formErrors.password = "";
                        }
                        else {
                            formErrors.password = "password should be contain minium 1 lowercase,1 uppercase ans 1 expression"
                        }
                    }
                    else {
                        formErrors.password = "password max length is 10 characters";
                    }
                }
                else {
                    formErrors.password = "minimum 6 characaters required"
                }

            }
            else {
                formErrors.password = "field can't be blank"
            }
                break;
            default:
                break;
        }

        if (name === "password") {
            if (value.length < 11) {
                setStateVal({ ...stateval, formErrors, [name]: value });
            }
        }
        else {
            setStateVal({ ...stateval, formErrors, [name]: value });

        }
    };

    const showPass = () => {
        setPass(!pass)
    }
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

   
    return (
        <div>
            <SignIn val={stateval} method={handleChange} method1={handleSubmit}/>
        </div>
    )
}
