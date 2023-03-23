import React,{useState} from 'react'
import  Button from 'bootstrap'
import Modal from 'bootstrap'

export default function Login() {
const [show,setShow] = useState(false)

const handleClose = () => setShow(false)
const handleShow = ()=> setShow(true)
    
return (
    <div>
        <Button variant="primary" onClick={handleShow}>
            Teste
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeHeader>
                <Modal.Title></Modal.Title>
            </Modal.Header>
        </Modal>  
    </div>
  )
}

