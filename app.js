var defaultModel = "cheetah";
var initialGame = "iii";
var initialModel = defaultModel;
var currentGame;

InitRW();

function startVehicleViewerIII(model) {
  currentGame = "iii";
  DataDirPath = "iii/data";
  ModelsDirPath = "iii/models";
  TexturesDirPath = "iii/textures";
  loadCar = loadCarIII;
  loadVehicleViewer("default.ide", function () {
    if (parseInt(model)) {
      SelectModelByID(model);
    } else {
      SelectModel(model);
    }
  });
}

function startVehicleViewerVC(model) {
  currentGame = "vc";
  DataDirPath = "vc/data";
  ModelsDirPath = "vc/models";
  TexturesDirPath = "vc/textures";
  loadCar = loadCarVC;
  loadVehicleViewer("default.ide", function () {
    if (parseInt(model)) {
      SelectModelByID(model);
    } else {
      SelectModel(model);
    }
  });
}

function startVehicleViewerSA(model) {
  currentGame = "sa";
  DataDirPath = "sa/data";
  ModelsDirPath = "sa/models";
  TexturesDirPath = "sa/textures";
  loadCar = loadCarSA;
  loadVehicleViewer("vehicles.ide", function () {
    if (parseInt(model)) {
      SelectModelByID(model);
    } else {
      SelectModel(model);
    }
  });
}

var hash = window.location.hash;
if (hash.length !== "") {
  hash = hash.substring(1).toLowerCase();
  var hashParts = hash.split("/");

  if (["iii", "vc", "sa"].includes(hashParts[0])) {
    initialGame = hashParts[0];
    if (hashParts.length > 1) {
      initialModel = hashParts[1];
    }
  } else {
    // Invalid location hash, reset it
    window.location.hash = "";
    if (window.history) {
      history.replaceState(null, null, " ");
    }
  }
}

if (initialGame === "iii") {
  startVehicleViewerIII(initialModel);
} else if (initialGame === "vc") {
  startVehicleViewerVC(initialModel);
} else if (initialGame === "sa") {
  startVehicleViewerSA(initialModel);
}
