const router = require('express').Router();
const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
} = require('../../controllers/pizza-controller');

// Set up GET all & POST - /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Set up GET one, PUT, and DELETE - /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;