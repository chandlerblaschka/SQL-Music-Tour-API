'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Band, Event, stage }) {
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      SetTime.belongsTo(stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  set_time.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true

    },
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'set_time',
    tableName: 'set_time',
    timestamps: false
  });
  return set_time;
};