import { useEffect } from 'react'
import ResultsTable from './ResultsTable'

const Info = ({ name, table }) => {

    useEffect(() => {
        console.log(name)
    }, [name])

    return (
        <div className='info'>
            <h1 className='info-name'>{ name }</h1>
            { table && <ResultsTable table={table} /> }
        </div>
    )
}

export default Info