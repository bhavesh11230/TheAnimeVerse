import mongoose from "mongoose";

const TeamSchema = new mongoose.Schema({
  teamName: { type: String, unique:true, required: true, default: null },
  binaryNumber: { type: String, default: null },
  numberSystem: { type: String, default: null },
  animeCharacter: { 
    name: { type: String, default: null },
    imageUrl: { type: String, default: null } 
  },
  assignedNode: { type: String, default: null },
  pointsRecieved : { type: Number, default: 0 },
  attempts: { type: Number, default: 0 },
});

export default mongoose.model("Team", TeamSchema);