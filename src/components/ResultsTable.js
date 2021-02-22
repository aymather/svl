import { useEffect } from 'react'
import classnames from 'classnames'

const ResultsTable = ({ table }) => {

    useEffect(() => {
        console.log('Rendered')
        console.log(table)
    }, [])

    return (
        <div className='results-table'>
            <div className={classnames('results-table-item', { 'results-table-item-highlight': table.type === 'star' })}>
                <h1 className='results-table-item-percent'>{table.star}%</h1>
                <p className='results-table-item-name'>STAR</p>
            </div>
            <div className={classnames('results-table-item', { 'results-table-item-highlight': table.type === 'noone' })}>
                <h1 className='results-table-item-percent'>{table.noone}%</h1>
                <p className='results-table-item-name'>NO ONE</p>
            </div>
            <div className={classnames('results-table-item', { 'results-table-item-highlight': table.type === 'leader' })}>
                <h1 className='results-table-item-percent'>{table.leader}%</h1>
                <p className='results-table-item-name'>LEADER</p>
            </div>
            <footer className='results-table-footer'>Have an opinion? <span>#starvsleader</span></footer>
        </div>
    )
}

export default ResultsTable