import { useLoaderData, useNavigate, useParams } from "react-router-dom"

export const Book = () => {
    const { bookId } = useParams();
    const { image, title, author, description, rating } = useLoaderData();
    const goBack = useNavigate();

    return (
        <div className="thumb">
            <button type="module" onClick={()=>goBack(-1)}>Go back</button>
            <img src={image} alt="" />
            <h2>Book {bookId}</h2>
            <h1>{title} - {author}</h1>
            <p>{description}</p>
            <p>{rating}</p>
        </div>
    )
}