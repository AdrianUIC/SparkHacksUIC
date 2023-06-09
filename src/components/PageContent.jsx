import ServiceApp from "./ServiceApp"
import '../styles/PageContent.css'

function PageContent(props) {
    const page = props.content.toLowerCase()
    if (page == "home") {
        return (
            <div className='content'>
                <h1>About</h1>
                <p> This is a tool that collects public information from the <a href="https://data.cityofchicago.org/">Chicago Data Portal</a> and uses the OpenStreetMaps API in order to populate different types of services that can be useful for the homeless communities. We aimed to create a site where all of the resources are displayed in a user friendly manner that is both compatible with mobile devices and desktops.</p>
                <div className="hands"> </div>
            </div>
        )
    } else {
        return (
            <ServiceApp service={page}></ServiceApp>
        )
    }
}

export default PageContent;