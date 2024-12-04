import {Sequelize, DataTypes} from 'sequelize' //npm i sequelize pg pg-hstore

import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.dbname, // nome do db -- 'echo'
    process.env.dbusername, // usuario -- 'postgres'
    process.env.dbpassword, // senha -- 'postgres'
    {
        host: process.env.dbhost, // host -- 'localhost'
        port: process.env.port,
        dialect: 'postgres'
    }
)
const User = sequelize.define('user', {
    nome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    sobrenome: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dataNascimento: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: Sequelize.DataTypes.ENUM('ativo', 'inativo'),
        allowNull: false,
        defaultValue: 'inativo'
    },
    profile_image: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
    }
}, {freezeTableName: true})

const Playlist = sequelize.define('Playlist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    cover: {
      type: DataTypes.STRING,
    },
  });
  
  const Artist = sequelize.define('Artist', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
  
 
  const Song = sequelize.define('Song', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
    },
    albumCover: {
      type: DataTypes.STRING,
    },
  });
  
 
  Playlist.hasMany(Song);
  Song.belongsTo(Playlist);
  
  Artist.hasMany(Song);
  Song.belongsTo(Artist);

const criarTabelas = () => {
    sequelize.authenticate().then(() => {
        console.log('conectou')
    })
        .catch((err) => {
            console.log(err)
        })
    sequelize.sync({ force: true }).then(() => {
        console.log('tabela criada')
    })
}

export { User, Playlist, Artist, Song, sequelize, criarTabelas };