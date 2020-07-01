import React, { useState } from 'react'
import SignIn from './HRUI'

export default function HRBL() {

    const [state, setstate] = useState({
        email : "",
        password : "",

        emailErr : false,
        passwordErr : false,

        emailMsg : "",
        passwordMsg : ""
    })

    const handle = event =>{
        setstate({
            ...state,
            [event.target.name] : event.target.value
        })
    }
    
    const prevent = event =>{
        event.preventDefault()
        // console.log("state ",state);
        valid();
        
    }


    const valid = async () =>{

        if (state.email !== '') {
            console.log('inside email validation')
             setstate({
                ...state,
                emailErr: false,
            })
            if (state.email.trim().match(/^[a-zA-Z ]*$/) && state.email !== '') {
                console.log('inside email ')
                     setstate({
                    emailErr: false,
                    emailMsg: '',
                    ...state,
                 })
             }
             else {
                   setstate({
                    emailErr: true,
                    emailMsg: 'Name should be Character',
                    ...state,
                 })
                 console.log('inside email else')
                 console.log("sate ", state);
                 
             }
        }else{
              setstate({
                emailErr: true,
                emailMsg: "Name Can't blank",
                ...state,
            })
            console.log('inside email else')
            console.log("sate ", state);
        }



        if (state.password !== '') {
            console.log('inside password validation')
             setstate({
               ...state,
               passwordErr: false,
           })
           if (state.password.trim().match(/^[a-zA-Z ]*$/) && state.password !== '') {
            await  setstate({
                   ...state,
                   passwordErr: false,
                   passwordMsg: ''
                })
            }
            else {
                   setstate({
                    ...state,
                    passwordErr: true,
                    passwordMsg: 'Name should be Character'
                })

            }
       }else{
          setstate({
               ...state,
               passwordErr: true,
               passwordMsg: "Name Can't blank"
           })
           console.log('inside password else')
           console.log("sate ", state);
       }
    }

    return (
        <div>
            <SignIn val={state} method={handle} method1={prevent}/>
        </div>
    )
}
