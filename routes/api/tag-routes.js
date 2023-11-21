const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const Duck = await Tag.findAll({
      include: [{
        model: Product,
        through: ProductTag
      }]
      res.json(Duck)
    })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const Jane = await Tag.findOne({
      where: {id: req.params.id},
      include [{
        model: Product,
        through: ProductTag
      }]
    })
    res.json(Jane)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const Jesus = await Tag.create(req.body)
    res.json(Jesus)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const Powell = await Tag.update(req.body, {
      where: {id:req.params.id}
    })
    res.json(Powell)

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const Cancun - await Tag.destroy({
      where: {id:req.params.id}
    })
    res.json(Cancun)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
  // delete on tag by its `id` value
});

module.exports = router;
