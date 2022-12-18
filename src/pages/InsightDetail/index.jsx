// import { useParams } from "react-router-dom"
// import Articles from "../../components/Articles"
// import { dataOurInsights } from "../../data/dataOurInsights"
// import { useEffect } from "react"



// const InsightDetail = ({match}) => {

//     useEffect(() => {
//         window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
//     }, [])
//     const { name } = useParams()
    
//     return(
//         <div>
//             {
//                 dataOurInsights
//                     .filter((list) => list.id === name)
//                     .map(({id, picture, date, author, comment, titlePost, categoryPost, description}) =>
//                         (
//                             <div key={id}>
//                                 <Articles
//                                     id={id}
//                                     picture={picture}
//                                     date={date}
//                                     author={author}
//                                     comment={comment}
//                                     titlePost={titlePost}
//                                     categoryPost={categoryPost}
//                                     description={description} />
//                             </div>
//                         ))
//             }
//         </div>
//     )
// }
// export default InsightDetail