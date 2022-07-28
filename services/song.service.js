const songModel = require("../models/song.model");

const addSong = async (newSong) => {
  try {
    return await new songModel(newSong).save();
  } catch (error) {
    console.log(error);
  }
};

const updateSong = async (id, data) => {
  try {
    console.log(typeof id);
    console.log();
    return await songModel.findByIdAndUpdate(id, data, {
      useFindAndModify: false,
    });
  } catch (error) {
    console.log(`Could not update Song ${error}`);
  }
};
const getAllSongs = async () => {
  try {
    return await songModel.find();
  } catch (error) {
    console.log(`Could not fetch songs ${error}`);
  }
};
const getSongsBySpecificArtist =async(artistName)=>{
  try{
    return await songModel.findOne( { "artist": artistName } );
  }catch(error){
    console.log(`Could not get songs by specific artist ${error}`);
  }
}
const deleteSong = async (songId) => {
  try {
    return await songModel.findOneAndDelete(songId);
  } catch (error) {
    console.log(`Could not delete song ${error}`);
  }
};
module.exports = {
  addSong,
  updateSong,
  getAllSongs,
  getSongsBySpecificArtist,
  deleteSong,
};
