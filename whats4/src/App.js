import React from 'react';
import Mensagem from './Components/Message';
import "./App.css"
import "./Components/Message.css"
import styled from 'styled-components'


const Main = styled.div`
flex-direction:column;
display:flex;
align-items: center;
background-color: grey;
font-family: "Langar";
`
const MsgDiv = styled.div`
border: 2px solid black;
height: 100vh;
width: 50%;
display: flex;
flex-direction:column;
justify-content: flex-end;
background-color: white;
`

const Form = styled.div`
width: 100%;
display: flex;
height: 5%;
margin-bottom: 1vh;
`
const InputNome = styled.input`
width:15%;
border-radius: 8px;
margin-left: 1%;
padding-left: 5px;
box-shadow: 0px 1px 5px 0px black;

`
const InputMsg = styled.input`
width:70%;
border-radius: 8px;
margin-left: 1%;
padding-left: 5px;
box-shadow: 0px 1px 5px 0px black;

`
const Button = styled.button`
width: 15%;
height: 100%;
border-radius: 8px;
margin-left: 1%;
margin-right: 1%;
box-shadow: 1px 1px 1px 0px black;
font-weight: bold;
:hover{
    background-color: red;
};
`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDeMensagemDados: [],
            listaDeMensagens: [],
            inputNome: "",
            inputMensagem: ""
        }
    }

    inputNomeF = (e) => {
        this.setState({
            inputNome: e.target.value
        })
    }

    inputMensagemF = (e) => {
        this.setState({
            inputMensagem: e.target.value
        })
    }

    enviar = (e) => {

        const msgApoio = {
            usuario: this.state.inputNome,
            mensagem: this.state.inputMensagem
        }
        let listaApoio = this.state.listaDeMensagemDados
        listaApoio.push(msgApoio)
        this.setState({
            listaDeMensagemDados: listaApoio
        })
        listaApoio = this.state.listaDeMensagemDados.map((elemento, index) => {
            return (<Mensagem apagar={() => { this.apagar(index) }} indice={index} usuario={elemento.usuario} mensagem={elemento.mensagem} key={index} />)
        })
        this.setState({
            listaDeMensagem: listaApoio
        })

        this.setState({
            inputNome: "",
            inputMensagem: ""
        })
    }

    check = (e) => {
        if (e.keyCode === 15) {
            this.enviar()
        }

    }

    apagar = (index) => {
        const indice = index
        let listaApoio = this.state.listaDeMensagemDados

        listaApoio.splice(indice, 1)
       

        this.setState({
            listaDeMensagemDados: listaApoio
        })

        listaApoio = this.state.listaDeMensagemDados.map((elemento, index) => {
            return (<Mensagem apagar={() => { this.apagar(index) }} indice={index}
                usuario={elemento.usuario} mensagem={elemento.mensagem} key={index} />)
        })
        this.setState({
            listaDeMensagem: listaApoio
        })
    }

    render() {
        return (
            <Main>
                <link href="https://fonts.googleapis.com/css2?family=Langar&display=swap" rel="stylesheet"></link>
                <MsgDiv>
                    {this.state.listaDeMensagem}
                    <Form>
                        <InputNome type="text" placeholder="Usuário" onChange={this.inputNomeF} value={this.state.inputNome} />
                        <InputMsg type="text" placeholder="Mensagem" onChange={this.inputMensagemF} onKeyDown={this.check} value={this.state.inputMensagem} />
                        <Button onClick={this.enviar}>Enviar</Button>
                    </Form>
                </MsgDiv>
            </Main>
        )
    }
}

export default App
