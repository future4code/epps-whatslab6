import React from 'react'
import styled from 'styled-components'
import "./Message.css"


const Nome = styled.p`
width: 100%;
margin: 0;
font-weight: bolder;
font-family: Langar;
display: ${props => props.lado};
`

const Principal = styled.div`
display:flex;
width:100%;
justify-content: ${ props => props.lado};
`

class Message extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eu: false,
            excluir: 0
        }
    }
    render() {
        return (
            <Principal onDoubleClick={this.props.apagar} lado={(props) => {
                if (this.props.usuario === "eu") {
                    return "flex-end"
                }
                else {
                    return "flex-start"
                }
            }}>
                <div className="segundaDiv">
                    <Nome lado={(props) => {
                        if (this.props.usuario === "eu") {
                            return "none"
                        }
                        else {
                            return "block"
                        }
                    }} >{this.props.usuario}</Nome>
                    <div className="msgTexto">
                        {this.props.mensagem}
                    </div>
                </div>
            </Principal>
        )
    }
}

export default Message