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
    }
}

export default notesApi;