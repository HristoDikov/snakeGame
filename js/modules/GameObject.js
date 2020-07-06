import * as Helper from './helper.js';

// GameObject definition
// This is the base class of the game. All objects in the game are Game Objects. 
// It provides the constructor for game objects, as well as some useful methods to manipulate them
export default class GameObject {
    constructor(positionX, positionY, canBeEaten, icon) {
        this.size = Helper.ObjectSize;
        this.position = {
            X: positionX,
            Y: positionY
        };

        this.icon = icon;
        this.isDestroyed = false;
        this.canBeEaten = canBeEaten;
    }

    // This is the default method, which is called by collisionDetect 
    // to update the state of an object on collision
    onCollision() {
        if (this.canBeEaten) {
            this.isDestroyed = true;
        }
    }

    // This method must be implemented in each descendant of GameObject
    update() {
        throw new Error("Not Implemented");
    }

    // This is the default draw method for each descendant, 
    // however each class is free to define own draw method
    draw(context) {
        context.fillStyle = this.color;
        context.moveTo(this.position.X, this.position.Y);
        if (this.icon) {
            context.drawImage(this.icon, this.position.X, this.position.Y);
        } else {
            context.fillRect(this.position.X, this.position.Y, this.size.WIDTH, this.size.HEIGHT);
        }
    }
}