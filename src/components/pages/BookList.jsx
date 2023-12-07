import { useLoaderData, useNavigate, NavLink, useSearchParams } from "react-router-dom"

export const BookList = () => {
    const books = useLoaderData();
    const goBack = useNavigate();


    const [searchParams, setSearchParms] = useSearchParams();
    const param = searchParams.get('title') ?? '';

    const updateQueryString = (title) => {
        const nextParams = title !== "" ? { title } : {};
        setSearchParms(nextParams)
    }

    const filterBook = books.filter(({ title }) => {
        console.log(title);
        return title.toLowerCase().includes(param.toLowerCase())
        
    })

    return (
        <div>
            <input type="text" value={param} onChange={(e)=>updateQueryString(e.target.value)} />
            <button type='button' onClick={() => goBack(-1)}>Go back</button>
            <h1>BookList</h1>
            <ul className="bookList">
            {filterBook.map(({id, title, author})=>(
                <li key={id}> 
                <NavLink to ={`/books/${id}`}>{id} - {title} - {author}</NavLink>
                </li>
            ))}
            </ul>
        </div>
    )
}