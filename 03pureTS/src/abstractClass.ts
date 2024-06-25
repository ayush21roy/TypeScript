abstract class TakePhotos {
    constructor(public camera: string,
        public filterMode: string
    ){ }

    abstract uploadReel() : string   // compulsorily tb defined in derived classes below

    deleteReel() : string {          // this method can be overidden but "not" neccessary to define in all derived class below
        return "Reel deleted";
    }
}

class Facebook extends TakePhotos {
    constructor(public camera : string,
        public filterMode: string,
        public bursts : number
    ) {
        super(camera,filterMode)
    }

    uploadReel(): string {
        return "REEL UPLOADED";
    }
}

// let user1 = new TakePhotos("vivo", "bright");   // cannot directly create instance of an abstract class

let user2 = new Facebook("oppo", "lightMode", 3);