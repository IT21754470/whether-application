
import { createUser } from "../controllers/user.controller";

const router=express.Router();


router.get('/users',createUser);

export default router;