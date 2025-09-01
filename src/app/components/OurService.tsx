import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Player from "lottie-react";

const ServicesCards = () => {
  const [animationData, setAnimationData] = useState<{ [key: string]: any }>(
    {}
  );
  const [loading, setLoading] = useState(true);

  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      description:
        "Intuitive, modern, and human-centered designs that keep your audience engaged at every click.",
      iconPath: "/images/card-one.json",
    },
    {
      id: 2,
      title: "Creative Design",
      description:
        "From banners, merchandise, and t-shirts to custom visuals — we turn your ideas into designs that stand out.",
      iconPath: "/images/card-two.json",
    },
    {
      id: 3,
      title: "Website Development",
      description:
        "We craft stunning, high-performance websites that don’t just look good — they convert and grow your business.",
      iconPath: "/images/card-three.json",
    },
    {
      id: 4,
      title: "Mobile Development",
      description:
        "Seamless mobile apps built for speed, scale, and unforgettable user experiences.",
      iconPath: "/images/card-four.json",
    },
  ];

  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const animations: { [key: string]: any } = {};

        for (const service of services) {
          try {
            const response = await fetch(service.iconPath);
            if (response.ok) {
              const data = await response.json();
              animations[service.iconPath] = data;
            } else {
              console.warn(`Failed to load animation: ${service.iconPath}`);
              animations[service.iconPath] = null;
            }
          } catch (error) {
            console.warn(`Error loading animation ${service.iconPath}:`, error);
            animations[service.iconPath] = null;
          }
        }

        setAnimationData(animations);
        setLoading(false);
      } catch (error) {
        console.error("Error loading animations:", error);
        setLoading(false);
      }
    };

    loadAnimations();
  }, []);

  return (
    <div className="min-h-screen p-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-block bg-amber-500/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
          Services
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Empowering Your
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Vision with{" "}
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Our Skills
          </span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-48">
        {services.map((service, index) => (
          <Card
            key={service.id}
            className="bg-slate-900/50 border-slate-800 transition-all duration-300 group relative"
          >
            <CardContent className="p-6 pt-16 relative">
              <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 z-20">
                  {loading ? (
                    <div className="w-44 h-44 bg-slate-600 rounded-lg animate-pulse" />
                  ) : animationData[service.iconPath] ? (
                    <Player
                      autoplay
                      loop
                      animationData={animationData[service.iconPath]}
                      style={{ height: 200, width: 200 }}
                      className="max-w-full h-auto"
                    />
                  ) : (
                    <div className="w-44 h-44 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        {service.title.charAt(0)}
                      </span>
                    </div>
                  )}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-amber-500 rounded-full opacity-50" />
              <div className="absolute bottom-4 right-6 w-1 h-1 bg-slate-600 rounded-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
