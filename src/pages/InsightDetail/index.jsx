import { useParams } from "react-router-dom"
import { dataOurInsights } from "../../data/dataOurInsights"
// import { test } from '../../data/test'


const InsightDetail = () => {
    const { id } = useParams()

    return(
        <div>
            
            {
                dataOurInsights
                    .map(({ picture, titlePost, categoryPost, description}) =>
                        (
                            <div>
                                <p>Bienvenue {id}</p>
                                
                            </div>
                        ))
            }
        </div>
    )
}

export default InsightDetail