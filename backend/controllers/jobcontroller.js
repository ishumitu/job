const asyncHandler = require('express-async-handler')

const job = require('../model/jobmodel')


// @desc getjobs
// @route get /api/jobs
// @access private
const getjobs = asyncHandler(async (req, res) => {
    const jobs = await job.find()

    res.status(200).json(jobs)
})

// @desc setjobs
// @route  post /api/jobs
// @access private
const setjobs = asyncHandler(async (req, res) => {
    if(!req.body.text) {
       res.status(400)
       throw new Error(' please add a text field')
    }  

    const jobs = await job.create({
        text: req.body.text 
    })

    res.status(201).json(jobs)
})

// @desc update jobs
// @route put /api/jobs
// @access private
const updatejobs = asyncHandler(async (req, res) => {
    const jobs = await job.findById(req.params.id)

    if(!jobs) {
        res.status(400)
        throw new Error('job not found')
    }

    const updatedjobs = await job.findById(req.params.id,req.body,{
        new: true,
    })
    res.status(200).json(updatedjobs)
})


// @desc delete jobs
// @route delete /api/jobs
// @access private
const deletejobs =  asyncHandler(async (req, res) => {
    const jobs = await job.findById(req.params.id)

    if(!jobs) {
        res.status(400)
        throw new Error('job not found')
    }

    await jobs.remove

    res.status(200).json({id: req.params.id})
})

function getName(){
    return "Prakash";
}

module.exports = {
    getjobs,
    setjobs,
    updatejobs,
    deletejobs,
}

