import classnames from 'classnames'

const ResultsTableX = ({ className, children, footer }) => {

    return (
        <div className={classnames('results-table', className)}>
            { children }
            { footer && <footer className='results-table-footer'>Have an opinion? <span>#starvsleader</span></footer> }
        </div>
    )
}

export default ResultsTableX