// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req,res,next) => {
    res.status(200).json({success:true,data:{
        msg:'SHOW BOOTCAMPS'
    }});
}


// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req,res,next) => {
    res.status(200).json({success:true,data:{
        msg:`Get bootcamp ${req.params.id}`
    }});
}


// @desc    Post single bootcamps
// @route   POST /api/v1/bootcamps/
// @access  Private
exports.createBootcamp = (req,res,next) => {
    res.status(200).json({success:true,data:{
        msg:'CREATE BOOTCAMPS'
    }});
}


// @desc    Update single bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req,res,next) => {
    res.status(200).json({success:true,data:{
        msg:`Update bootcamp ${req.params.id}`
    }});
}



// @desc    Delete single bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req,res,next) => {
    res.status(200).json({success:true,data:{
        msg:`Delete bootcamp ${req.params.id}`
    }});
}


