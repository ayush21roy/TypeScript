"use strict";
class TakePhotos {
    constructor(camera, filterMode) {
        this.camera = camera;
        this.filterMode = filterMode;
    }
    deleteReel() {
        return "Reel deleted";
    }
}
class Facebook extends TakePhotos {
    constructor(camera, filterMode, bursts) {
        super(camera, filterMode);
        this.camera = camera;
        this.filterMode = filterMode;
        this.bursts = bursts;
    }
    uploadReel() {
        return "REEL UPLOADED";
    }
}
// let user1 = new TakePhotos("vivo", "bright");   // cannot directly create instance of an abstract class
let user2 = new Facebook("oppo", "lightMode", 3);
