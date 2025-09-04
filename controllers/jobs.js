const getAllJob=async(req,res)=>{
    res.send('Get all jobs')
}

const getJob=async(req,res)=>{
    res.send('Get a single job')
}

const createJob=async(req,res)=>{
    res.send('Create a job')
}

const updateJob=async(req,res)=>{
    res.send('Update a Job')
}

const deleteJob=async(req,res)=>{
    res.send('Delete a job')
}

module.exports={
    getAllJob,
    getJob,
    createJob,
    updateJob,
    deleteJob
}