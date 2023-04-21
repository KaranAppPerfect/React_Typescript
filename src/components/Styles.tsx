type stylesProps = {
    styles: React.CSSProperties
}

export const Styles = (props : stylesProps) => {
    return (
        <div style={props.styles}>

        </div>
    )
}