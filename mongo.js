import mongoose from "mongoose";
const connect =mongoose.connect("mongodb://localhost:27017/TheClassicSignFab");
connect.then(()=>{
    console.log("DB Connected successfuly");
})
.catch(()=>{
    console.log("Neyellam uru pada maatey");
})



const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  interiorExterior: {
    type: String,
    required: true,
  },
  length: {
    type: String,
  },
  width: {
    type: String,
  },
  description: {
    type: String,
  },
});
const LoginSchema2 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  twodthreed: {
    type: String,
    required: true,
  },
  lighted: {
    type: String,
    required: true,
  },
  length: {
    type: String,
  },
  width: {
    type: String,
  },
  description: {
    type: String,
  },
});
const LoginSchema3 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  description: {
    type: String,
  },
});

const collection = mongoose.model('kiosks', LoginSchema);
const collection2 = mongoose.model('Signage', LoginSchema2);
const collection3 = mongoose.model('Contact-us', LoginSchema3);

export { collection, collection2, collection3 };



