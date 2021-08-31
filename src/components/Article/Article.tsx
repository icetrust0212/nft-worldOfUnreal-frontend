import './article.css';

const Article = ({ article }: PropsType) => {
    return (
        <div className="article media">
            <img className="mr-3 thumbnail" src={article.thumbnail} alt="thumbnail" />
            <div className="media-body">
                <h5 className="mt-0 title">{article.title}</h5>
                <span className="text">{article.text}</span>
                <div className="footer">
                    <span dangerouslySetInnerHTML={{__html: article.footer}}/>
                    <button className="btn more">Learn more</button>
                </div>
            </div>
            
        </div>
    )
}
interface PropsType {
    article: any
}

export default Article;