import ServiceApp from "./ServiceApp"

function PageContent(props) {
    const page = props.content.toLowerCase()
    if (page == "home") {
        return (
            <div className='content'>Home</div>
        )
    } else {
        return (
            <ServiceApp service={page}></ServiceApp>
        )
    }
}

export default PageContent;