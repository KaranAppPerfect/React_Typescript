type sectionProps = {
    children : React.ReactNode
}

export const Section = (props: sectionProps) => {
    return <div> {props.children} </div>
}