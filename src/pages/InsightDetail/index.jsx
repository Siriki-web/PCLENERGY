import { useParams } from "react-router-dom"
import { dataOurInsights } from "../../data/dataOurInsights"
// import { test } from '../../data/test'


const InsightDetail = ({match}) => {
    // const { id } = useParams()

    return(
        <div>
            {
                dataOurInsights
                    .filter((list) => list.id === match.params.id)
                    .map(({id, picture, titlePost, categoryPost, description}) =>
                        (
                            <div key={id}>
                                <img src={picture} alt="" />
                                <h2>{titlePost}</h2>
                                <h3>{categoryPost}</h3>
                                <p>{description}</p>
                            </div>
                        ))
            }
        </div>
    )
}

export default InsightDetail