// Delete
const deleteOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id)

    if (!doc) {
      return res.status(204).json('No document found with that ID')
    }

    res.status(204).json({ status: 'success', message: 'Delete successful!' })
  } catch (err) {
    res.status(404).json({ status: 'error', err })
  }
}

// Update
const updateOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!doc) {
      return next(res.status(404).json('No document found with that ID'))
    }

    res.status(200).json(doc)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Create
const createOne = (Model) => async (req, res) => {
  try {
    const doc = await Model.create(req.body)
    res.status(201).json(doc)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get One by ID
const getOneById = (Model) => async (req, res) => {
  try {
    const doc = await Model.findById(req.params.id)

    if (!doc) {
      return next(res.status(404).json('No document found with that ID'))
    }

    res.status(200).json(doc)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get One by user ID
const getByUserId = (Model) => async (req, res) => {
  try {
    const doc = await Model.find({ userId: req.params.userId })

    if (!doc) {
      return next(res.status(404).json('No document found with that ID'))
    }

    res.status(200).json(doc)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get All without queries
const getAllBasic = (Model) => async (req, res) => {
  try {
    const doc = await Model.find()

    if (!doc) {
      return next(res.status(404).json('No document found with that ID'))
    }

    res.status(200).json(doc)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

module.exports = {
  deleteOne,
  updateOne,
  createOne,
  getOneById,
  getByUserId,
  getAllBasic,
}
