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
import { GiAstronautHelmet } from "react-icons/gi";
import { HiArrowLongRight } from "react-icons/hi2"
import Aos from "./hooks/aosConfig"
import { Separator } from "./components/ui/separator";

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

    useEffect(() => {
      Aos.refresh();
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
      <div className="flex flex-col bg-slate-400/5 w-full items-center">

        <h1 className="text-5xl mt-3" style={{ height: "4.5rem" }}>Comment</h1>
        <Separator/>
        <div 
          className={`w-full flex flex-col min-h-1/2 p-6 md:p-24 gap-8 mt-4 md:mt-0 
          md:flex-row items-center justify-center  bg-slate-600/5 md:max-xl:flex:flex-col`}
          >
          <form
            className="p-4 md:p-10 w-full md:w-1/2 h-auto md:h-96 flex justify-center flex-col bg-slate-100/5 shadow-lg"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <Label className="text-zinc-200">Nome:</Label>
            <Input
              className="bg-background"
              name="name"
              value={commentValue.name}
              onChange={handleInputChange}
            />
            <Label className="mt-4 text-zinc-200">Descrição:</Label>
            <Input
              className="h-28 mb-4 bg-background"
              name="description"
              value={commentValue.description}
              onChange={handleInputChange}
            />
      
            <Button
              type="submit"
              className={`px-4 py-2 w-full flex items-center justify-center shadow-xl rounded-md bg-secondary 
              relative text-white overflow-hidden group`}
              variant="outline"
              >
                <span className="relative flex items-center z-10">
                  Explore minha cidade 
                </span>
                <div className="absolute flex items-center justify-end inset-0 bg-background transform translate-y-full origin-top left-0 transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <HiArrowLongRight size={24} className="mr-4"/>
                </div>
              </Button>
          </form>
      
          {comments.length > 0 && (
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <ScrollArea className="h-96 p-4 md:p-6 flex items-center justify-center rounded-md border bg-background">
                <h2 className="text-zinc-200">Comentários:</h2>
      
                {comments.map((comment, index) => (
                  <div className="mt-6" key={index}>
                    <ul className="w-full flex flex-col round-lg shadow-md">
                      <li className="w-full flex items-center justify-end bg-zinc-200">
                        <DropdownMenu>
                          <DropdownMenuTrigger className="text-xl text-black mr-5">
                            <BsThreeDots />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem className="flex items-center justify-between" onClick={() => setDeleteComments(comment.id)}>
                              deletar <Trash2 />
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </li>
                      <li className="bg-zinc-200 flex p-1 text-background round-lg shadow-md gap-5">
                        <GiAstronautHelmet className={`w-12 h-12 p-2 rounded-full bg-zinc-400`} />
                        <span className="flex items-center justify-center">Nome: {comment.name}</span>
                      </li>
                      <li className="bg-zinc-200 p-1 text-background round-lg shadow-md gap-5">
                        <p className="flex text-sm items-start justify-start ml-16 mb-5 w-3/4">Descrição: {comment.description}</p>
                      </li>
                    </ul>
                  </div>
                ))}
              </ScrollArea>
            </div>
          )}
        </div>
      </div>
      );
}      