import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '211797028897-e81990up2vel7gbq96j188lcock7jcpj.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }
    render (){
        return (<div>Google Auth</div>)
    }
};

export default GoogleAuth;