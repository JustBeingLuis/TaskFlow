const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'admin@gmail.com',
    password: 'admin123'
  });
  if (error) {
    console.error('Error al iniciar sesión:', error.message);
    return;
  }
  console.log('TOKEN:', data.session.access_token);
}

login();