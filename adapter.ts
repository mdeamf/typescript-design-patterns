interface iPhone {
  useLightning(): void;
}

interface Android {
  useMicroUSB(): void;
}

class iPhone7 implements iPhone {
  useLightning() {
    console.log("Using lightning port...");
  }
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log("Using micro USB...");
  }
}

class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: iPhone;

  constructor(iphone: iPhone) {
    this.iphoneDevice = iphone;
  }

  public useMicroUSB() {
    console.log('Converting Micro USB to Lightning...');
    this.iphoneDevice.useLightning();
  }
}

let iphone = new iPhone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);
chargeAdapter.useMicroUSB();