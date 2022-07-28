const songService = require("../services/song.service");

const apiGetAllSongs = async (req, res) => {
  try {
    const songs = await songService.getAllSongs();
    debugger;
    if (!songs) {
      res.status(404).json("There are no song published yet!");
    }
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const apiCreateSong = async (req, res) => {
  try {
    const createdSong = await songService.addSong(req.body);
    res.json(createdSong);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const apiUpdateSong = async (req, res) => {
  try {
    const idOfParams = req.params.id || {};
    const updatedSong = await songService.updateSong(idOfParams, req.data);

    if (updatedSong.modifiedCount === 0) {
      throw new Error("Unable to update song, error occord");
    }

    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const apiDeleteSong = async (req, res) => {
  try {
    const songId = req.params.id;
    const deleteResponse = await songService.deleteSong(songId);
    res.json(deleteResponse);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const apiGetSongsBySpecificArtist = async (req, res)=>{
  try {
    const artist = req.params.artist || {};
    const getArtsistsSongs = await songService.getSongsBySpecificArtist(artist);
    res.json(getArtsistsSongs);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports={
apiCreateSong,
apiDeleteSong,
apiGetAllSongs,
apiUpdateSong,
apiGetSongsBySpecificArtist
}
