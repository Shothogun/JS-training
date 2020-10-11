import axios from 'axios';

const api = axios.create({
  // Running in a Android cellphone
  // Access Notebook back localhost(notebook IP + port 3333)
  baseURL: 'http://192.168.0.8:3333'
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com físico: IP da máquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: 10.8.2.2 (Android Studio)
 * Android com Emulador: 10.8.2.2 (Genymotion)
 * Android Físico: IP da maquina
 */