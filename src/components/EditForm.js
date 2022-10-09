import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import React from "react";
import '../assets/styles/stockButton.css'
import putProducts from "../utils/putProducts";
import getProductById from "../utils/getProductById";
import '../assets/styles/images.css'


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
    <div className="cont">
        <div className="productView">
            <form className="newForm" action="">
                <div>
                    <div className="eachInput">
                        <h2>Información</h2>
                        {/* nombre */}
                        <label htmlFor="title">Nombre</label>
                        <input
                        value={form.title}
                        onChange={handleInput}
                        className="input"
                        placeholder="inputName"
                        id="title"
                        type="text"
                        name="title"
                        />
                    </div>
                    {/* Precio */}
                    <div className="eachInput">
                    <label htmlFor="price">Valor</label>
                    <input
                    value={form.price}
                    onChange={handleInput}
                    className="input"
                    placeholder="inputPrice"
                    id="price"
                    type="text"
                    name="price"
                    />
                    </div>
                    {/* stock button */}
                    <div className='eachInput'>
                    <label>Stock</label>
                    <div className="counter">
                    <button type="number" onClick={handleDecrement} className="decrement">-</button>
                    <p 
                    
                    className="result">{counter}</p>
                    <button type="number"  onClick={handleIncrement} className="increment">+</button>
                </div>
                    </div>
                    {/* descripcion */}
                    <div className="eachInput">
                        <label htmlFor="description">Descripción</label>
                        <textarea
                            value={form.description}
                    onChange={handleInput}
                    className="input form-description"
                    placeholder="inpuDescription"
                    id="description"
                    type="textArea"
                    name="description"
                        />
                    </div>
                    <div className="eachInput store-form">
                    <label htmlFor="store">Tienda</label>
                    <select name="select" className="input" id="stores">
                    <option defaultValue={true}>Tienda</option>
                    <option value="easy">Easy</option>
                    <option value="disco">Disco</option>
                    <option value="jumbo">Jumbo</option>
                    <option value="paris">Paris</option>
                    </select>
                    </div>
                </div>

                {/* añadir y quitar imagenes */}
                <div>
                    <h2>Galeria de Imágenes</h2>
                    <div className="eachInput">
                    <label htmlFor="image">Nueva Imagen</label>
                    <input
                    onBlur={handleImg} 
                    className="input"
                    placeholder="inputImg"
                    id="image"
                    name="image"
                    type="text"
                    />
                    </div>
                    <div className="eachInput">
                    <label>Imágenes actuales</label>
                    {form.images.map((image,id)=>{
                    return (<div key={id + image} className='formImgs'>
                                <div className='formImgs-img'>
                                    <img src={image} alt="" />
                                    <p>{image}</p>
                                </div>
                                <button onClick={deleteIMG} value={image} className='quitar'>Quitar</button>
                            </div>)
                    })}
                    </div>
                </div>
                {/* cancelar o enviar formulario */}
                <div className="sendForm">
                    <button>Cancelar</button>
                    <button onClick={handleSave}>Guardar</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default EditForm;
