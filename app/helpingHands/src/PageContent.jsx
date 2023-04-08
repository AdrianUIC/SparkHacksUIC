import ServiceApp from "./ServiceApp"

function PageContent(props) {
    if (props.content == "home") {
        return (
            <div className='content'>Home</div>
        )
    } else {
        return (
            <ServiceApp service={props.content}></ServiceApp>
        )
    }
}

export default PageContent;