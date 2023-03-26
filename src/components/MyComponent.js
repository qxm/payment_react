import React from 'react';
import AuthContext from './AuthContext';

function MyComponent() {
    const authContext = React.useContext(AuthContext);
    return( 
    <div> 
       Welcome {authContext}
   </div>
   );
}

export default MyComponent;
