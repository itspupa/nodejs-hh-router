import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  res.send("View all accounts");
});

router.get("/:id", function (req, res) {
  res.send("View an account by id");
});

router.post("/", function (req, res) {
  res.send("Create an account");
});

router.put("/:id", function (req, res) {
  res.send("Update an account by id");
});

router.delete("/:id", function (req, res) {
  res.send("Delete an account by id");
});

export default router;


