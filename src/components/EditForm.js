import { useParams } from "react-router-dom";
import { useEffect, useState, React } from "react";

//Estilos
import '../assets/styles/stockButton.css'
import '../assets/styles/images.css'
import '../assets/styles/editForm.css'
//Servicios
import putProducts from "../utils/putProducts";
import getProductById from "../utils/getProductById";
// Componentes
import EditProduct from "./EditProduct";
import Input from "./Input";
import Stock from "./Stock";
import TextArea from "./TextArea";
import Select from "./Select";
import Images from "./Images";




function EditForm() {

  // Tomo el parametro de la url para identificar el productos
  const id = useParams().id;

  // Estado del formulario
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




  //Llamado a la api
  useEffect(()=>{
    async function get(){
      await getProductById(id)
      .then(re=>{setform(re);setCounter(re.stock);}
      )
    }
    get()    
  }, []);


            //STOCK//

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
        stock : Number(counter),
      })
  }, [counter])
              // FIN STOCK //

              //IMAGENES//

  // Actualizo / Elimino las imagenes
    const handleImg = (e)=>{
        const image = e.target.value;
        if(image.length>0){

          form.images.push(image);
          setform({...form})
        }
    }
    const deleteIMG = (e)=>{
      e.preventDefault();
      const deletedUrl = e.target.value
      let imagesForm = form.images.filter(image => image !== deletedUrl)
      setform({...form, images:imagesForm,})
  }
              //FIN IMAGENES//
  
  //Input handlers

  const handleInput = async (e) =>{
    console.log(e.target.id)

    if(e.target.name == 'price' & e.target.name.length>0){
      setform({
        ...form,
        [e.target.name] : Number(e.target.value),
      })
    }else if(e.target.name == 'price' & e.target.name.length==0){
      alert('Ingrese un valor en el nombre')
    }
    else{
      setform({
        ...form,
        [e.target.name] : e.target.value,
      })
    }
  }


 

   //Boton de hardar
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
    <div className="cont">
    <EditProduct img={form.images[0]}name={form.title} stock={form.stock} valor={form.price} />
        <div className="productView">
            <form className="newForm" action="">
                <div>
                    <h2>Información</h2>
                    <Input tipo="text" name="title" id="title" label="Nombre" value={form.title} handler={handleInput} />
                    <Input tipo="number" name="price" id="price" label="Valor" value={form.price} handler={handleInput}  />
                    <Stock handlerI={handleIncrement} handlerD={handleDecrement} stock={counter}/>
                    <TextArea value={form.description} handler={handleInput}/>
                    <Select/>
                </div>
                <div>
                    <h2>Galeria de Imágenes</h2>
                    <Input tipo="text"name="image" id="image" label="Nueva Imagen" handlerBlur={handleImg}/>
                    <Images handler={deleteIMG} images={form.images} />
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
