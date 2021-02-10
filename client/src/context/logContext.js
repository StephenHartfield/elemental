import React, { useState } from 'react';

const LogContext = React.createContext();

function LogProvider(props) {
    const [logs, setLogs] = useState({});

    const addLog = (log) => {
        if(logs[log.key]) {
            const newLog = logs[log.key];
            newLog.push(log.value);
            console.log(newLog);
            setLogs(prev => ({...prev, [log.key]: newLog}));
        } else {
            const newLogs = logs;
            newLogs[log.key] = [log.value];
            console.log(newLogs);
            setLogs(newLogs);
        }
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