import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import { connection } from '../config/config';

let models: any = {}
let modelsLoaded = false;

const createModels = () => {
    if (modelsLoaded) return models;

    const modelsList = fs.readdirSync(path.resolve(__dirname, "./")).filter((t) => (
        ~t.indexOf('.ts') || ~t.indexOf('.js') && !~t.indexOf('index') || !~t.indexOf('.map')
    )).map((file) => { 
         const model = require(path.join(__dirname, file))(connection, Sequelize.DataTypes);
         models[model.name] = model;
     });
    
     Object.keys(models).forEach(modelName => {
        if(models[modelName].associate){
            models[modelName].associate(models);
        }
     })
     
     models['sequelize'] = connection
     models['Sequelize'] = Sequelize
     modelsLoaded = true

     return models
};

export default createModels();
export { createModels }


