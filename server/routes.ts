import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactMessage;
      
      // Validate the request
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required'
        });
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid email address'
        });
      }
      
      // In production, you would send an email here
      // For now, we'll just log the message
      console.log('Contact form submission:', {
        name,
        email,
        subject,
        message
      });
      
      // Return success response
      return res.status(200).json({
        success: true,
        message: 'Message received successfully'
      });
    } catch (error) {
      console.error('Error in contact form submission:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
