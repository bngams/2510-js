import { Router } from 'express';
import {
  createItem,
  getItems,
  getItemById,
  updateItem,
  deleteItem,
} from '../controllers/itemController';

const router = Router();

// GET api/items/
router.get('/', getItems);
// GET api/items/:id
router.get('/:id', getItemById);
// POST api/items/
router.post('/', createItem);
// PUT api/items/:id
router.put('/:id', updateItem);
// DELETE api/items/:id
router.delete('/:id', deleteItem);

export default router;