import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';



const router = Router();


router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

// rotas de procura

router.get('/search', SearchController.search);



// vamos confirar 
/*
router.get('/', (req, res)=>{
    res.send('home');
});
*/
export default router;