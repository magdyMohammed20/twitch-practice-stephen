import React , {useState , useEffect} from 'react'

function GoogleAuth() {

    const[isSignedIn , setIsSignedIn] = useState(null);

    useEffect(() => {

        window.gapi.load('client:auth2' , () => {
            window.gapi.client.init({
                clientId: '247182517046-irk3j9lvcbed82vn54dt33mdmqoph5qt.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                // Create Then For Get Auth Status
                const auth = window.gapi.auth2.getAuthInstance();
                setIsSignedIn(auth.isSignedIn.get());

                // Updating Auth State
                // Use gapi.auth2.getAuthInstance().signOut()
                // And gapi.auth2.getAuthInstance().signIn() For Check
                auth.isSignedIn.listen(() => {
                    setIsSignedIn(auth.isSignedIn.get());
                })
            })
        });
    } , [])
    
    const onSignIn = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    }

    const onSignOut = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    }


    // Function For Rendering Auth Status
    // Displaying SignIn And SignOut Buttons
    const renderAuthBtn = () => {
        if(isSignedIn === null){
            return null;
        } 

        else if(isSignedIn){
            return (
                <button className="btn btn-danger" onClick={() => onSignOut()}>
                    SignOut
                </button>
            )
        }

        else{
            return (
                <button className="btn btn-success" onClick={() => onSignIn()}>
                    SignIn With Google
                </button>
            )
        }
    }
    return (
        <div>
            {renderAuthBtn()}
        </div>
    )
}

export default GoogleAuth
