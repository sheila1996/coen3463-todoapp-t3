import axios from 'axios';

var notesApi = {

	onAdd:(task)=>{
        return axios.post('/notes/addNew', task)
        .then((res)=>{
            console.log(res);
            return res;
        }).catch((err)=>{
            console.log(err);
            return err; 

        });
    },
    onGetNote:(mute)=>{
        return axios.post('/notes/getAll', mute)
        .then((res)=>{
            console.log(res);
            return res;
        }).catch((err)=>{
            console.log(err);
            return err;
        })
    },

    onDeleteOne:(coffee)=>{
        return axios.post('notes/deleteOne', coffee)
        .then((res)=>{
            console.log(res);
            return res;
        }).catch((err)=>{
            console.log(err);
            return err;
        })
    },

    onUpdateComplete:(white)=>{
        return axios.post('/notes/updateComplete', white)
        .then((res)=>{
            console.log(res);
            return res;
        }). catch((err)=>{
            console.log(err);
            return err;
        })
    }
}

export default notesApi;