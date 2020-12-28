class BluRayPlayer {
  turnOn() {
    console.log("Turning BluRay On...");
  }

  turnOff() {
    console.log("Turning BluRay Off...");
  }

  play() {
    console.log("Playing BluRay Disc...");
  }
}

class Amplifier {
  turnOn() {
    console.log("Turning Amplifier On...");
  }

  turnOff() {
    console.log("Turning Amplifier Off...");
  }

  setSource(source: string) {
    console.log("Setting source to " + source);
  }

  setVolume(volumeLevel: number) {
    console.log("Setting volume to " + volumeLevel);
  }
}

class Lights {
  dim() {
    console.log("Lights are dimming...");
  }
}

class TV {
  turnOn() {
    console.log("Turning TV On...");
  }

  turnOff() {
    console.log("Turning TV Off...");
  }
}

class PopcornMaker {
  turnOn() {
    console.log("Turning Popcorn Maker On...");
  }

  turnOff() {
    console.log("Turning Popcorn Maker Off...");
  }

  pop() {
    console.log("Popping corn!");
  }
}

class HomeTheaterFacade {
  private bluray: BluRayPlayer;
  private amp: Amplifier;
  private lights: Lights;
  private tv: TV;
  private popcornMaker: PopcornMaker;

  constructor(
    bluray: BluRayPlayer,
    amp: Amplifier,
    lights: Lights,
    tv: TV,
    popcornMaker: PopcornMaker
  ) {
    this.bluray = bluray;
    this.amp = amp;
    this.lights = lights;
    this.tv = tv;
    this.popcornMaker = popcornMaker;
  }

  public watchMovie() {
    this.popcornMaker.turnOn();
    this.popcornMaker.pop();

    this.lights.dim();

    this.tv.turnOn();

    this.amp.turnOn();
    this.amp.setSource("bluray");
    this.amp.setVolume(11);

    this.bluray.turnOn();
    this.bluray.play();
  }

  public endMovie() {
    this.popcornMaker.turnOff();

    this.amp.turnOff();

    this.tv.turnOff();

    this.bluray.turnOff();
  }
}

let bluray = new BluRayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let homeTheater = new HomeTheaterFacade(bluray, amp, lights, tv, popcornMaker);
homeTheater.watchMovie();
