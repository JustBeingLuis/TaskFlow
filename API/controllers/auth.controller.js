const supabase = require('../bd-conection');

async function register(req,res){
    const {email, password} = req.body;

    // Validaciones
    if(typeof email !== "string" || email.trim() === ""){
        return res.status(400).json({success:false, error:'El campo "email" es obligatorio y debe ser un texto.', data:null});
    }
    if(typeof password !== "string" || password.trim() === ""){
        return res.status(400).json({success:false, error:'El campo "password" es obligatorio y debe ser un texto.', data:null});
    }

    const {data, error} = await supabase.auth.signUp({
        email,
        password
    });

    if(error){
        return res.status(400).json({success:false, error: error.message, data:null});
    }

    return res.status(201).json({success:true, error:null, token: data.session?.access_token});
}

async function login(req,res){
    const {email, password} = req.body;
    // Validaciones
    if(typeof email !== "string" || email.trim() === ""){
        return res.status(400).json({success:false, error:'El campo "email" es obligatorio y debe ser un texto.', data:null});
    }
    if(typeof password !== "string" || password.trim() === ""){
        return res.status(400).json({success:false, error:'El campo "password" es obligatorio y debe ser un texto.', data:null});
    }
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if(error){
        return res.status(400).json({success:false, error: error.message, data:null});
    }
    return res.status(200).json({success:true, error:null, token: data.session?.access_token});

}

module.exports = {
    register,
    login
};