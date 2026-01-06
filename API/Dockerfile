# Usa una imagen oficial de Node.js como base
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias primero (mejor caché)
COPY package*.json ./

# Instala solo las dependencias de producción
RUN npm install --production

# Copia el resto del código fuente
COPY . .

# Expone el puerto en el que corre tu app
EXPOSE 3000

# Comando por defecto para iniciar la app
CMD ["npm", "start"]