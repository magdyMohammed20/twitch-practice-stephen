import React , {useState , useEffect} from 'react'

function GoogleAuth() {

    const[isSignedIn , setIsSignedIn] = useState(null);

    useEffect(() => {
        console.log('Hellow');
        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // Create Then For Get Auth Status
                const auth = window.gapi.auth2.getAuthInstance();
                setIsSignedIn(auth.isSignedIn.get());
            })
        });
    } , [])

    // Function For Rendering Auth Status
    const renderAuthBtn = () => {
        if(isSignedIn === null){
            return <div>We Don't Know If You Signed In</div>
        } 

        else if(isSignedIn){
            return <div>Congs You Signed In Now</div>
        }

        else{
            return <div>Sorry You Don't Signed In</div>
        }
    }
    return (
        <div>
            GoogleAuth
            {renderAuthBtn()}
        </div>
    )
}

export default GoogleAuth
