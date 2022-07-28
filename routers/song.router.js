const { Router } = require('express');
const { apiCreateSong, apiDeleteSong, apiGetAllSongs, apiUpdateSong } = require('../controllers/songs.controller')
const router = Router();

router.get('/Songs', apiGetAllSongs);
router.post('/Songs/add',apiCreateSong);
router.put('/Songs/update/:id',apiUpdateSong);
router.delete('/Songs/delete/:id',apiDeleteSong)

module.exports = router;