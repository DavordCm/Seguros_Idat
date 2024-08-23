import axios from 'axios';

const API_URL = 'http://localhost:5085/api/empleado';  // Verifica que esta URL sea correcta

const login = async (nombre, clave) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            nombre,
            clave
        });
        return response.data;
    } catch (error) {
        console.error('Error al iniciar sesión', error);
        throw error;
    }
};

const getEmpleados = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener empleados', error);
        throw error;
    }
};

const apiService = {
    login,
    getEmpleados
};

export default apiService;
