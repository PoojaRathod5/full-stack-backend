import { useEffect, useState } from "react"

const Posts = () => {
    const [posts, setPosts] = useState([])
    //getting the posts
    useEffect(() => {
        fetch("https://drab-train-cow.cyclic.app/posts", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                setPosts(res)
            })
            .catch(err => console.log(err))
    }, [])

    // delete function
    const handleDelete = (id) => {
        fetch(`https://drab-train-cow.cyclic.app/posts/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setPosts(posts.filter((post) => post._id !== id));
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {posts.length > 0 ?
                posts.map((ele) =>
                    <div>
                        <h3>{ele.title}</h3>
                        <p>{ele.body}</p>
                        <button onClick={() => {
                            handleDelete(ele._id)
                        }}>Delete</button>
                    </div>
                ) : <div>
                    <h1>There is no post for the user</h1>
                </div>
            }
        </>
    )
}

export { Posts }