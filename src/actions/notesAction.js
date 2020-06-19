import axios from 'axios'

export const getNotes = (notes) => {
    return {type : 'GET_NOTES',payload:notes}
}

export const startGetNotes = () => {
    return(dispatch)=>{
        axios.get('http://localhost:3040/notes')
            .then((res)=>{
                dispatch(getNotes(res.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const addNotes = (notes) =>{
    return {type : 'ADD_NOTES' ,payload:notes}
}

export const startAddNotes = (formData) => {
    return(dispatch)=>{
        axios.post('http://localhost:3040/notes',formData)
            .then((res)=>{
                alert('added note successfull')
                dispatch(addNotes(res.data.note))
                
            })
            .catch((err)=>{
                console.log(err)
            })
    }
} 

export const removeNotes = (note) => {
    return {type : 'REMOVE_NOTES',payload:note}
}

export const startRemoveNotes = (id) => {
    return(dispatch)=>{
        axios.delete(`http://localhost:3040/notes/${id}`)
            .then((note)=>{
                dispatch(removeNotes(note.data))
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}

export const updateNotes = (note) => {
    return {type:'UPDATE_NOTES',payload:note}
}

export const startUpdateNote = (obj) => {
    return(dispatch)=>{
        axios.put(`http://localhost:3040/notes/${obj.id}`,obj.formData)
            .then((note)=>{
                alert('updated note successfull')
                dispatch(updateNotes(note.data))
                obj.redirect()
            })
            .catch((err)=>{
                console.log(err)
            })
        }
}