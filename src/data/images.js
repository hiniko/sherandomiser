const FACE_SHERMAN = "face_sherman";

const HAIR_FRY = "hair_fry";
const HAIR_BENDER = "hair_bender";
const HAIR_CHUCKIE = "hair_chuckie";
const HAIR_ANISTON = "hair_aniston";
const HAIR_WALLACE = "hair_wallace";
const HAIR_WILSON = "hair_wilson";
const HAIR_PRINCE = "hair_prince";
const HAIR_PERRY = "hair_perry";
const HAIR_DEVIL = "hair_devil";
const HAIR_RICK_JAMES = "hair_rick_james";

const FACIALHAIR_GOTEE_BEARD = "gotee_beard";
const FACIALHAIR_FUMANCHU = "fumanchu";

export let keys = {
  faces: {
    sherman: FACE_SHERMAN
  },
  hair: {
    aniston: HAIR_ANISTON,
    bender: HAIR_BENDER,
    chuckie: HAIR_CHUCKIE,
    devil: HAIR_DEVIL,
    fry: HAIR_FRY,
    perry: HAIR_PERRY,
    prince: HAIR_PRINCE,
    rick_james: HAIR_RICK_JAMES,
    wallace: HAIR_WALLACE,
    wilson: HAIR_WILSON,
  },
  facialhair: {
    fumanchu: FACIALHAIR_FUMANCHU,
    gotee: FACIALHAIR_GOTEE_BEARD
  }
};

export let data = {
  [FACE_SHERMAN]: {
    filename: "face_sherman.png",
    offsetX: 0,
    offsetY: 0
  },

  [HAIR_RICK_JAMES]: {
    filename: "hair_rick_james.png",
    offsetX: 180,
    offsetY: 90,
    longHair: true
  },

  [HAIR_FRY]: {
    filename: "hair_fry.png",
    offsetX: 180,
    offsetY: 89,
    longHair: true
  },

  [HAIR_BENDER]: {
    filename: "hair_bender.png",
    offsetX: 160,
    offsetY: 102
  },

  [HAIR_CHUCKIE]: {
    filename: "hair_chuckie.png",
    offsetX: 180,
    offsetY: 90,
    longHair: true
  },

  [HAIR_ANISTON]: {
    filename: "hair_jennifer_aniston.png",
    offsetX: 180,
    offsetY: 90,
    longHair: true
  },

  [HAIR_WALLACE]: {
    filename: "hair_mia_wallace.png",
    offsetX: 180,
    offsetY: 90,
    longHair: true
  },

  [HAIR_WILSON]: {
    filename: "hair_owen_wilson.png",
    offsetX: 180,
    offsetY: 90,
    longHair: true
  },

  [HAIR_PRINCE]: {
    filename: "hair_prince.png",
    offsetX: 180,
    offsetY: 90
  },

  [HAIR_PERRY]: {
    filename: "hair_katy_perry.png",
    offsetX: 180,
    offsetY: 90,
    longHair: true
  },

  [HAIR_DEVIL]: {
    filename: "hair_devil_horns.png",
    offsetX: 180,
    offsetY: 90
  },

  [FACIALHAIR_GOTEE_BEARD]: {
    filename: "facial_hair_gotee_beard.png",
    offsetX: 180,
    offsetY: 90,
    variants: {
      longHair: {
        filename: "facial_hair_gotee_beard_variant_1.png"
      }
    }
  },

  [FACIALHAIR_FUMANCHU]: {
    filename: "facialhair_fumanchu.png",
    offsetX: 180,
    offsetY: 90
  }
};

export let helpers = {
  get(key) {
    return data[key];
  },
  url(key, variant = null) {
    if (variant) {
      return "images/" + data[key].variants[variant].filename;
    } else {
      return "images/" + data[key].filename;
    }
  }
}