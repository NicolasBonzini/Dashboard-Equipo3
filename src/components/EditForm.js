import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import React from "react";
import '../assets/styles/stockButton.css'
import putProducts from "../utils/putProducts";
import getProductById from "../utils/getProductById";
import '../assets/styles/images.css'
import EditProduct from "./EditProduct";

import Input from "./Input";
import Stock from "./Stock";
import TextArea from "./TextArea";
import Select from "./Select";
import Images from "./Images";




function EditForm() {

  const id = useParams().id;

  // Estado inicial del formulario
  const [form, setform] = useState({
    id: '',
    title: "",
    description: "",
    price: '',
    rating: {
      rate: '',
      count: ''
    },
    stock: '',
    category: "",
    images: [
      "",
    ]})

    // Estado del contador de stock
  const [counter, setCounter] = useState(form.stock)

  //Llamado api
  useEffect(()=>{
    async function get(){
      await getProductById(id)
      .then(re=>{setform(re);setCounter(re.stock);console.log(re)}
      )
    }
    get()    
  }, []);



  //Funciones incremento y decremento
  const handleDecrement = (e)=>{
    e.preventDefault()
    if(counter>0){
      setCounter(counter-1)
    } 
  }
  const handleIncrement = (e)=>{
    e.preventDefault()
    setCounter(counter+1)
  }

    // Actualizo el stock del formulario con el estado del contador
  useEffect(()=>{
    setform({
        ...form,
        stock : counter,
      })
  }, [counter])

  // Actualizo / Elimino las imagenes
    const handleImg = (e)=>{
        const image = e.target.value;
        form.images.push(image);
        setform({...form})
    }
  
    const deleteIMG = (e)=>{
        e.preventDefault();
        const deletedUrl = e.target.value
        let imagesForm = form.images.filter(image => image !== deletedUrl)
        setform({...form, images:imagesForm,})
    }

    ///////

  //Tomo los datos de los inputs
  const handleInput = async (e) =>{
    console.log(e.target.id)
    setform({
      ...form,
      [e.target.name] : e.target.value,
    })
    console.log(form)
    
  }


  //BOTON DE GUARDAR
  const handleSave =(e) =>{
    e.preventDefault()
     function putProductos(form){
        const data =  putProducts(form)
        .then(res=>res.json())
    }
    putProductos(form)
  }

  return (
    <>
    <EditProduct name={form.title} stock={form.stock} valor={form.price} />
    <div className="cont">
        <div className="productView">
            <form className="newForm" action="">
                <div>
                    <h2>Información</h2>
                    <Input name="title" id="title" label="Nombre" value={form.title} handler={handleInput} />
                    <Input name="price" id="price" label="Valor" value={form.price} handler={handleInput}  />
                    <Stock handlerI={handleIncrement} handlerD={handleDecrement} stock={counter}/>
                    <TextArea value={form.description} handler={handleInput}/>
                    <Select/>
                </div>
                <div>
                    <h2>Galeria de Imágenes</h2>
                    <Input name="image" id="image" label="Nueva Imagen" handlerBlur={handleImg}/>
                    <Images images={form.images} handler={deleteIMG}/>
                </div>
                
                {/* cancelar o enviar formulario */}
                <div className="sendForm">
                    <button>Cancelar</button>
                    <button onClick={handleSave}>Guardar</button>
                </div>
            </form>
        </div>
    </div>
                    </>
  );
}

export default EditForm;
