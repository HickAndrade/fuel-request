const isProduction = process.env.NODE_ENV === 'production';

const devApiConfig = {
    baseUrl: 'http://localhost:4917/api/v1'
}

const prodApiConfig = {
    baseUrl: 'servidor Produção'
}

const apiConfig = isProduction ? prodApiConfig:devApiConfig;

export { apiConfig };

