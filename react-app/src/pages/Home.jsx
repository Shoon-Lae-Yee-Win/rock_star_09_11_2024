import { Typography } from "@mui/material";
// import { useEffect, useState } from "react";
import Item from "../components/Item";
import Form from "../components/Form";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useApp } from "../AppProvider";

const api = "http://localhost:8080/posts";

async function fetchPost() {
    const res = await fetch(api);
    return res.json();
}

async function deletePost(id) {
    const res = await fetch(`${api}/${id}`, {
        method: 'DELETE',
    });
    return res.json();
}

export default function Home() {
    const {data, error, isLoading} = useQuery("posts", fetchPost);
    const queryClient = useQueryClient();
    const {showForm} = useApp();
    // const [posts, setPosts] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [hasError, setHasError] = useState(false);

    // useEffect(() => {
    //     fetch(api).then(async res => {
    //         setPosts(await res.json());
    //         setIsLoading(false);
    //     });
    // }, []);
    // .catch(() => setHasError(true));

    //loop query data & 
    // refetch & update 
    const remove = useMutation(deletePost, {
        onMutate: id => {
            queryClient.setQueryData("posts", old => {
                return old.filter(post => {
                    return post.id != id;
                });
            });
        },

        // onSuccess: async () => {
        //     await queryClient.cancelQueries();
        //     await queryClient.invalidateQueries("posts");
        // }
    })

    if(error) {
        return (
            <Typography>
                {error}
            </Typography>
        );
    }

    if(isLoading) {
        return (
            <Typography>
                Loading ...
            </Typography>
        );
    }

    return (
        <>
        {showForm && <Form />}
            {data.map(post => {
                return (
                    <Item 
                        key={post.id}
                        post={post}
                        remove={remove.mutate}
                    />
                )
            })}
        </>
    );
}