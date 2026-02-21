import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/leads", async (req, res) => {
    try {
      const parsed = insertLeadSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error });
      }
      const lead = await storage.createLead(parsed.data);
      res.json(lead);
    } catch (e) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return httpServer;
}
