import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { startUpdateNote } from "../actions/notesAction";

class NotesForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title : this.props.note ? this.props.note.title : '',
            body : this.props.note ? this.props.note.body : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            title : this.state.title,
            body : this.state.body
        }
        const redirect = () => {
           return this.props.histroy.push('/')
        }
        this.props.note ? this.props.dispatch(startUpdateNote({formData,id:this.props.note._id,redirect})) : this.props.handleAddNotes(formData)
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.title} name="title" onChange={this.handleChange} /><br />
                    <textarea row="5" col="3" type="text" value={this.state.body} name="body" onChange={this.handleChange} /><br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state,props) => {
    const id = props.match.params.id
    return {
        note : state.notes.find(note=>note._id==id)
    }
}

export default withRouter(connect(mapStateToProps)(NotesForm))