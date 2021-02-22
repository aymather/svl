import classnames from 'classnames'

const ResultsTableRow = ({
    leftText,
    rightText,
    leftColor,
    rightColor,
    className
}) => {
    return (
        <div className={classnames('results-table-item', className)}>
            <h1 style={{ color: leftColor }} className='results-table-item-percent'>{ leftText }</h1>
            <p style={{ color: rightColor }} className='results-table-item-name'>{ rightText }</p>
        </div>
    )
}

export default ResultsTableRow