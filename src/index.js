import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
    ReactDOM.render(
    <React.StrictMode>
        <App 
            portletNamespace={portletNamespace} 
            contextPath={contextPath}
            portletElementId={portletElementId} 
            configuration={configuration}
            />
         </React.StrictMode>,    
        document.getElementById(portletElementId)
    );

}
