"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Waves, Car, Users, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="relative">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)"
          }}
        />
        
        <div className="relative z-10 px-4 py-32 max-w-7xl mx-auto text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <Waves className="h-12 w-12 mr-2" />
            <h1 className="text-5xl font-bold">SurfShare</h1>
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Connectez-vous avec d&apos;autres surfeurs, partagez vos trajets et préservez la planète
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Je cherche un trajet
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm">
              Je propose un trajet
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">Comment ça marche ?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <MapPin className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trouvez votre spot</h3>
            <p className="text-gray-600">
              Sélectionnez votre destination parmi les meilleurs spots de surf
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <Users className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Connectez-vous</h3>
            <p className="text-gray-600">
              Rejoignez une communauté de surfeurs partageant les mêmes valeurs
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="mb-4 flex justify-center">
              <Car className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Partagez le trajet</h3>
            <p className="text-gray-600">
              Économisez sur les frais et réduisez votre impact environnemental
            </p>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre la communauté ?</h2>
          <p className="mb-8 text-lg">
            Inscrivez-vous gratuitement et commencez à partager vos trajets dès aujourd&apos;hui
          </p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
            Créer un compte
          </Button>
        </div>
      </div>
    </div>
  );
}