const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async(req, res) => {
  try {
    const data = await Category.findOne({
      where: {id:req.params.id}
    })
    res.json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
    
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body)
    res.json(createCategory)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
    
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const Jill = await Category.update(req.body, {
      where: {id:req.params.id}
    })
    res.json(Jill)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
    
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const Payton = await Category.destroy({
      where:{id:req.params.id}
    })
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
    
  }
});

module.exports = router;
