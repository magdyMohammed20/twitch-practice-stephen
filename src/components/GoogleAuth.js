import React , {useEffect} from 'react'

function GoogleAuth() {

    useEffect(() => {
        console.log('Hellow');
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    } , [])
    return (
        <div>
            GoogleAuth
        </div>
    )
}

export default GoogleAuth
