var BluRayPlayer = /** @class */ (function () {
    function BluRayPlayer() {
    }
    BluRayPlayer.prototype.turnOn = function () {
        console.log("Turning BluRay On...");
    };
    BluRayPlayer.prototype.turnOff = function () {
        console.log("Turning BluRay Off...");
    };
    BluRayPlayer.prototype.play = function () {
        console.log("Playing BluRay Disc...");
    };
    return BluRayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.turnOn = function () {
        console.log("Turning Amplifier On...");
    };
    Amplifier.prototype.turnOff = function () {
        console.log("Turning Amplifier Off...");
    };
    Amplifier.prototype.setSource = function (source) {
        console.log("Setting source to " + source);
    };
    Amplifier.prototype.setVolume = function (volumeLevel) {
        console.log("Setting volume to " + volumeLevel);
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log("Lights are dimming...");
    };
    return Lights;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("Turning TV On...");
    };
    TV.prototype.turnOff = function () {
        console.log("Turning TV Off...");
    };
    return TV;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log("Turning Popcorn Maker On...");
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log("Turning Popcorn Maker Off...");
    };
    PopcornMaker.prototype.pop = function () {
        console.log("Popping corn!");
    };
    return PopcornMaker;
}());
var HomeTheaterFacade = /** @class */ (function () {
    function HomeTheaterFacade(bluray, amp, lights, tv, popcornMaker) {
        this.bluray = bluray;
        this.amp = amp;
        this.lights = lights;
        this.tv = tv;
        this.popcornMaker = popcornMaker;
    }
    HomeTheaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.turnOn();
        this.amp.setSource("bluray");
        this.amp.setVolume(11);
        this.bluray.turnOn();
        this.bluray.play();
    };
    HomeTheaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOff();
        this.amp.turnOff();
        this.tv.turnOff();
        this.bluray.turnOff();
    };
    return HomeTheaterFacade;
}());
var bluray = new BluRayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new TV();
var popcornMaker = new PopcornMaker();
var homeTheater = new HomeTheaterFacade(bluray, amp, lights, tv, popcornMaker);
homeTheater.watchMovie();
