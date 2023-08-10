import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';

export default function Contact(){
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        let template = {
            email: email,
            userName: userName,
            message: message
        }

        emailjs.send('service_g2u1be8', 'template_oc54zi6', template, '3TmN3ClnO7knv4tJP')
        .then(function(response){
            console.log('Success!', response.status, response.text);
        }, function(error){
            console.log('FAILED', error);
        });

        setUserName('');
        setEmail('');
        setMessage('');

    }
    
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };


    return (
        <div className='bg-slate-700'>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Get in touch with me!</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input value={email} name="email" onChange={handleInputChange} tabIndex={0} arial-label="Please input name" type="email" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                            <input value={userName} name="userName" onChange={handleInputChange} tabIndex={0} arial-label="Please input email address" type="text" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea  value={message} name="message" onChange={handleInputChange} tabIndex={0} aria-label="leave a message" role="textbox" type="text" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"/>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <form onSubmit={handleSubmit}>
                        <button type='submit' className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-cyan-500 rounded hover:bg-cyan-700 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 focus:outline-none">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
