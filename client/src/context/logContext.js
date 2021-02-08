import React, { useState } from 'react';

const LogContext = React.createContext();

function LogProvider(props) {
    const [logs, setLogs] = useState({});

    const addLog = (log) => {
        setLogs(prev => ({...prev, [log.key]: log.value}));
    }

    return (
        <LogContext.Provider
            value={{
                logs,
                addLog
            }}
        >
            {props.children}
        </LogContext.Provider>
    )
}

export default LogContext
export { LogProvider }