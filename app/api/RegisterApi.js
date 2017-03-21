import axios from 'axios';

const RegisterApi = {

	    onLogin:(data)=>{
        return axios.post('/auth/login',data)
        .then((res)=>{
            console.log(res);
            return res;
        }).catch((err)=>{
            console.log(err);
            return err; 

        });
    },

	onRegister:(data)=>{
		return axios.post('/auth/register', data)
		.then((res)=>{
			return res;
		}).catch((err)=>{
			return err;
		});
	}

}

export default RegisterApi;