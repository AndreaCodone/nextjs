// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import arrayNomi from "../../../data/users.json";

export default function handler(req, res) {
  console.log("SONO IL SERVER");
  console.log("REQ: ", req.body);
  if (req.body === "CIAO") {
    res.status(200).json(arrayNomi);
  } else {
    res.status(200).json({ nome: "giuseppe" });
  }
}
