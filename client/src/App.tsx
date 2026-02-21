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

function Router() {
  return (
    <MainLayout>
      <Switch>
        <Route path="/" component={Home} />
        {/* We'll use Area for all 'quienes-somos', 'calidad' etc for now as placeholders if needed, 
            but strictly the user asked for Area template specifically for the subpages */}
        <Route path="/que-ofrecemos" component={Hub} />
        
        {/* Dynamic route for areas */}
        <Route path="/que-ofrecemos/:id" component={Area} />
        
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