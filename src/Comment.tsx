import "./styles/globals.css"

import React, { useState, useEffect } from "react";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "./components/ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { Trash2 } from "lucide-react";

export default function Comment() {
    const [commentValue, setCommentValue] = useState({
        name: "",
        description: "",
    });

    const [comments, setComments] = useState([]); 

    const Navigate = useNavigate();

    useEffect(() => {
        fetchComments();
    }, []);



    async function fetchComments() {
        try {
            const response = await fetch("http://localhost:3000/comments");
            if (response.ok) {
                const commentsData = await response.json();
                setComments(commentsData);
            }
        } catch (error) {
            console.error(error);
        }
    }

    function setDeleteComments(id: string){
        fetch(`http://localhost:3000/comments/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })

        setComments(comments.filter( comment => comment.id !== id ))
    }

    async function onSubmit() {

        if(!commentValue.name || !commentValue.description){
            alert("digite todo os campos")
            return
        }

        try {
            const request = await fetch("http://localhost:3000/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(commentValue)
            });

            if (!request.ok) {
                throw new Error("Erro na solicitação para o servidor.");
            }

            await fetchComments(); 
            setCommentValue({
                name: "",
                description: "",
            })

            toast("Mensagem enviada com sucesso", {
                type: "success",
                autoClose: 2000,
                onClose: () => Navigate("/comments")
            });

        } catch (error) {
            console.error(error);
            toast("Erro ao enviar a mensagem", {
                type: "error",
                autoClose: 2000
            });
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setCommentValue((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    }

    return (
        <div className="w-full h-1/2 flex-col flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black md:max-xl:flex:flex-col">
            <form 
                className="w-1/2 h-72 flex justify-center flex-col"
                onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit();
                }}
            >
                <Label>Nome:</Label>
                <Input
                    name="name"
                    value={commentValue.name}
                    onChange={handleInputChange}
                />
                <Label className="mt-4">Descrição:</Label>
                <Input
                className="h-28 mb-4 "
                    name="description"
                    value={commentValue.description}
                    onChange={handleInputChange}
                />

                <Button type="submit">Enviar</Button>
            </form>

                {comments.length > 0 && (
            <ScrollArea className="h-80 w-1/2 p-5 mb-10 flex items-center justify-center rounded-md border bg-background">
                    
                    <h2>Comentários:</h2>
                    {comments.map((comment, index) => (
                        <div className="mt-2">
                            <ul className="w-full flex flex-col round-lg shadow-md " key={index}>
                                <li className="w-full flex items-center justify-end bg-zinc-200">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="text-xl text-black mr-5"><BsThreeDots/></DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                        <DropdownMenuItem className="flex items-center justify-between"  onClick={() => setDeleteComments(comment.id)}>
                                            deletar <Trash2 />
                                        </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <li className="bg-zinc-200 p-1 text-background  round-lg shadow-md gap-5">
                                    Nome: {comment.name}
                                </li>
                                <li className="bg-zinc-200 p-1 text-background round-lg shadow-md gap-5">
                                    Descrição: {comment.description}
                                </li>
                            </ul>
                        </div>
                    ))}
                    
            </ScrollArea>
                )}

        </div>
    );
}
