import classnames from 'classnames'

const InstructionText = ({
    header_text,
    body_text,
    footer_text,
    highlight,
    className
}) => {
    return (
        <div className={classnames('instruction-text', className)}>
            <span>
                {
                    header_text &&
                    <h1 className={classnames('instruction-text-header', { 'highlight-text': highlight })}>
                        {header_text}
                    </h1>
                }
                {
                    body_text &&
                    <p className={classnames('instruction-text-body', { 'highlight-text': highlight })}>
                        {body_text}
                    </p>
                }
                {
                    footer_text &&
                    <footer className={classnames('instruction-text-footer', { 'highlight-text': highlight })}>
                        {footer_text}
                    </footer>
                }
            </span>
        </div>
    )
}

export default InstructionText