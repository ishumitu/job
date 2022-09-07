const asyncHandler = require('express-async-handler')


// @desc getjobs
// @route get /api/jobs
// @access private
const getjobs = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get jobs'})
})

// @desc setjobs
// @route  post /api/jobs
// @access private
const setjobs = asyncHandler(async (req, res) => {
    if(!req.body.text) {
       res.status(400)
       throw new Error(' please add a text field')
    }  

    res.status(200).json({message: 'Set jobs'})
})

// @desc update jobs
// @route put /api/jobs
// @access private
const updatejobs = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update  jobs ${req.params.id}`})
})

// @desc delete jobs
// @route delete /api/jobs
// @access private
const deletejobs =  asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete  jobs ${req.params.id}`})
})

module.exports = {
    getjobs,
    setjobs,
    updatejobs,
    deletejobs,
}

