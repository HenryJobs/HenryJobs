import { Router } from "express";
import { getEmailContact } from "../../controllers/getEmailForContact.controller";

const router = Router();

router.get("/:id/:emailBusiness", getEmailContact);

export default router;
