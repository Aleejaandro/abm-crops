import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import MainLayout from "@/components/layout/MainLayout";
import Home from "@/pages/Home";
import Hub from "@/pages/Hub";
import Area from "@/pages/Area";
import Calidad from "@/pages/Calidad";
import Sostenibilidad from "@/pages/Sostenibilidad";

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/que-ofrecemos" component={Hub} />
        <Route path="/que-ofrecemos/:id" component={Area} />
        <Route path="/calidad" component={Calidad} />
        <Route path="/sostenibilidad" component={Sostenibilidad} />
        
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;