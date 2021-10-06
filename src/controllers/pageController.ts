import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';


export const home = (req: Request, res: Response) => {

// pegar os dados e mostrar

    let list = Pet.getAll();

   //  res.send('home no controller!');
    // res.render('pages/page);
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background:'allanimals.jpg'
        },
        list
    });
}

export const dogs = (req: Request, res: Response) => {

    let list = Pet.getFromType('dog');

    //res.send('dogs');
    // res.render('pages/dogs);
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list 
    });

}

export const cats = (req: Request, res: Response) => {

    let list = Pet.getFromType('cat');
    //res.send('cats');
    // res.render('pages/cats);
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background:'banner_cat.jpg'
        },
        list 
    });
    

}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
   // res.send('fisher');
    // res.render('pages/fisher);
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background:'banner_fish.jpg'
        },
        list
    });

}