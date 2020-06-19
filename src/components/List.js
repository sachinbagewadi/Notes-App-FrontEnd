import React from 'react' 
import {connect} from 'react-redux'
import {startGetNotes,startAddNotes,startRemoveNotes} from '../actions/notesAction'
import NotesForm from '../components/notesForm'
import {Link} from 'react-router-dom'

class NotesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleAddNotes = (formData) => {
        this.props.dispatch(startAddNotes(formData))
    }

    handleRemove = (id) => {
        this.props.dispatch(startRemoveNotes(id))
    }


    render() {
        if(this.props.notes.length === 0 ){
            this.props.dispatch(startGetNotes())
        }
        return (
            <div>
                <NotesForm handleAddNotes={this.handleAddNotes}/>
                <h1>Listing Notes-{this.props.notes && this.props.notes.length} </h1> 
                {
                   this.props.notes && this.props.notes.map(note=>{
                        return (
                            <div key={note._id}>
                                <h3>title - {note.title}</h3>
                                <h5>body - {note.body}</h5>
                                <button onClick={()=>{this.handleRemove(note._id)}}>remove</button>
                                <button><Link to={`/notes/${note._id}`}>Edit</Link></button>
                            </div>
                        )
                    })
                }
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes : state.notes
        
    }
}


export default connect(mapStateToProps)(NotesList)