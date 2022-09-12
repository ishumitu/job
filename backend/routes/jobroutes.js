const express = require('express')
const router = express.Router()
const {
     getjobs,
      setjobs,
      updatejobs,
      deletejobs,
     } = require('../controllers/jobController')




router.route('/').get(getjobs).post(setjobs)
router.route('/:id').put(updatejobs).delete(deletejobs)





module.exports = router
 