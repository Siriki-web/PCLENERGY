import { useParams } from "react-router-dom"
import Articles from "../../components/Articles"
import { dataOurInsights } from "../../data/dataOurInsights"
// import { test } from '../../data/test'


const InsightDetail = ({match}) => {
    const { name } = useParams()
    
    return(
        <div>
            {
                dataOurInsights
                    .filter((list) => list.id === name)
                    .map(({id, picture, date, author, comment, titlePost, categoryPost, description}) =>
                        (
                            <div key={id}>
                                <Articles
                                    id={id}
                                    picture={picture}
                                    date={date}
                                    author={author}
                                    comment={comment}
                                    titlePost={titlePost}
                                    categoryPost={categoryPost}
                                    description={description} />
                            </div>
                        ))
            }
        </div>
    )
}
export default InsightDetail