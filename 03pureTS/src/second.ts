// interface

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Stories {
    createStory(): string
}

class Instagram implements TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {

    }
}

class Youtube implements TakePhoto, Stories {
    constructor(public cameraMode: string, public filter: string, public burst: number,
        public shorts: string,
    ) { }

    createStory(): string {
        return "story was created";
    }
}