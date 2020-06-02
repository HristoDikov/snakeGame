import * as Helper from './helper.js';

//Game Field definition
// This class represents canvas element on which the game objects are drawn
export default class GameField {
    // constructor receives canvas, has size and context
    constructor(canvas) {
        canvas.height = Helper.FieldSize.HEIGHT;
        canvas.width = Helper.FieldSize.WIDTH;

        this.context = canvas.getContext('2d');
    }

    // receives game objects, clears canvas and draws them
    draw(gameObject) {
        for(var i = 0; i < gameObject.length; i++){
            gameObject[i].draw(this.context);
        }
    }
}
