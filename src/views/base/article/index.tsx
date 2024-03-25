import Nav from "./Nav"
import Container from "./Container"
import './index.less'

const Article = () => {
    return (
        <div className="article-wrapper">

            <div className="flex flex-col justify-between mt-4 blog-wrapper md:flex-row">
                <Nav></Nav>
                <Container></Container>
            </div>
        </div>
    )
}


export default Article