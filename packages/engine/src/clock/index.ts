
import { Engine } from "..";
import { EventEmitter } from "../utils/EventEmitter";
import { WeightedArray } from "../utils/WeightedArray";
import { Event } from "./event";


export class Clock extends EventEmitter<number> {
    private gameEvents: WeightedArray<Event>;
    day: number;
    constructor() {
        super();
        this.day = 0;
        this.gameEvents = new WeightedArray();
    }

    runEvents(_engine: Engine) : void {
        return;
    }

}