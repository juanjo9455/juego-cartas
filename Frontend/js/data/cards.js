export const CARD_DATA = {

    planes: {
      name: "Aviones Comerciales",
      emoji: "✈️",
      flags: ["🇺🇸","🇪🇺","🇬🇧","🇨🇦","🇩🇪","🇫🇷","🇦🇺","🇯🇵","🇸🇬"],
      stats: ["Vel. Crucero (km/h)", "Altitud (m)", "Pasajeros", "Alcance (km)", "Peso (ton)"],
      cards: [
        { name: "Boeing 747-8", rank: "1A", stats: [988, 13100, 467, 14815, 448] },
        { name: "Airbus A380", rank: "1B", stats: [903, 13115, 853, 15200, 575] },
        { name: "Boeing 787-9", rank: "1C", stats: [956, 13100, 296, 14140, 254] },
        { name: "Airbus A350-900", rank: "2A", stats: [945, 13100, 440, 15000, 316] },
        { name: "Boeing 737 MAX", rank: "2B", stats: [839, 12500, 230, 6570, 194] },
        { name: "Airbus A220-300", rank: "2C", stats: [871, 12500, 160, 6300, 70] },
        { name: "Embraer E195-E2", rank: "3A", stats: [870, 12900, 146, 4800, 62] },
        { name: "Concorde (ret.)", rank: "3B", stats: [2179, 18300, 100, 7223, 187] },
        { name: "Boeing 777X", rank: "3C", stats: [905, 13100, 426, 13500, 352] },
        { name: "Airbus A330-900", rank: "4A", stats: [912, 13000, 440, 13334, 251] },
      ]
    },
  
    fighter: {
      name: "Aviones de Guerra",
      emoji: "🛩️",
      flags: ["🇺🇸","🇷🇺","🇬🇧","🇫🇷","🇨🇳","🇸🇪","🇮🇱","🇯🇵","🇩🇪"],
      stats: ["Vel. Máx. (km/h)", "Techo (m)", "Alcance (km)", "Potencia (kN)", "Peso (ton)"],
      cards: [
        { name: "F-22 Raptor", rank: "1A", stats: [1960, 19812, 2960, 156, 38] },
        { name: "Su-57 Felon", rank: "1B", stats: [2100, 20000, 3500, 175, 35] },
        { name: "F-35A Lightning", rank: "1C", stats: [1960, 15240, 2200, 191, 32] },
        { name: "Eurofighter Typhoon", rank: "2A", stats: [2495, 19812, 2900, 180, 23] },
        { name: "Dassault Rafale", rank: "2B", stats: [1912, 15235, 3700, 150, 24] },
        { name: "JAS 39 Gripen", rank: "2C", stats: [2200, 15240, 3000, 81, 14] },
        { name: "Chengdu J-20", rank: "3A", stats: [2100, 20000, 5500, 181, 37] },
        { name: "F-16 Fighting Falcon", rank: "3B", stats: [2414, 15240, 4200, 130, 21] },
        { name: "MiG-29 Fulcrum", rank: "3C", stats: [2450, 18013, 1500, 162, 20] },
        { name: "F/A-18 Super Hornet", rank: "4A", stats: [1915, 15000, 2346, 140, 29] },
      ]
    },
  
    tanks: {
      name: "Tanques",
      emoji: "🪖",
      flags: ["🇺🇸","🇷🇺","🇩🇪","🇬🇧","🇫🇷","🇮🇱","🇯🇵","🇰🇷","🇨🇳"],
      stats: ["Vel. Máx. (km/h)", "Blindaje (mm)", "Potencia (HP)", "Alcance (km)", "Peso (ton)"],
      cards: [
        { name: "M1A2 Abrams SEP", rank: "1A", stats: [68, 900, 1500, 426, 73] },
        { name: "Leopard 2A7+", rank: "1B", stats: [72, 850, 1479, 450, 68] },
        { name: "T-14 Armata", rank: "1C", stats: [80, 1100, 1500, 500, 55] },
        { name: "Challenger 3", rank: "2A", stats: [59, 950, 1200, 550, 74] },
        { name: "Merkava Mk.4", rank: "2B", stats: [64, 700, 1500, 500, 65] },
        { name: "K2 Black Panther", rank: "2C", stats: [70, 800, 1500, 450, 55] },
        { name: "Leclerc XLR", rank: "3A", stats: [71, 820, 1500, 550, 56] },
        { name: "Type 10 (Hitomaru)", rank: "3B", stats: [70, 750, 1200, 400, 48] },
        { name: "T-90M Proryv", rank: "3C", stats: [65, 950, 1130, 550, 48] },
        { name: "Altay (AÇ)", rank: "4A", stats: [70, 800, 1500, 450, 65] },
      ]
    },
  
    f1: {
      name: "Fórmula 1",
      emoji: "🏎️",
      flags: ["🇬🇧","🇩🇪","🇮🇹","🇺🇸","🇫🇷","🇦🇹","🇳🇱","🇲🇨","🇧🇷"],
      stats: ["Vel. Máx. (km/h)", "Potencia (CV)", "Peso (kg)", "Aceleración 0-100", "Downforce (kg)"],
      cards: [
        { name: "Red Bull RB20", rank: "1A", stats: [378, 1000, 798, 1.7, 3500] },
        { name: "Ferrari SF-24", rank: "1B", stats: [372, 1000, 798, 1.8, 3400] },
        { name: "Mercedes W15", rank: "1C", stats: [370, 1000, 798, 1.8, 3300] },
        { name: "McLaren MCL38", rank: "2A", stats: [368, 1000, 798, 1.9, 3200] },
        { name: "Aston Martin AMR24", rank: "2B", stats: [360, 1000, 798, 1.9, 3100] },
        { name: "Williams FW46", rank: "2C", stats: [355, 1000, 798, 2.0, 2900] },
        { name: "Alpine A524", rank: "3A", stats: [358, 1000, 798, 2.0, 3000] },
        { name: "RB VCARB 01", rank: "3B", stats: [356, 1000, 798, 2.0, 2950] },
        { name: "Haas VF-24", rank: "3C", stats: [353, 1000, 798, 2.1, 2850] },
        { name: "Sauber C44", rank: "4A", stats: [350, 1000, 798, 2.1, 2800] },
      ]
    },
  
    cars: {
      name: "Autos de Lujo",
      emoji: "🚗",
      flags: ["🇮🇹","🇩🇪","🇬🇧","🇺🇸","🇯🇵","🇸🇪","🇫🇷","🇦🇹","🇸🇪"],
      stats: ["Vel. Máx. (km/h)", "Potencia (CV)", "0-100 km/h (s)", "Par (Nm)", "Precio ($K)"],
      cards: [
        { name: "Bugatti Chiron SS", rank: "1A", stats: [440, 1600, 2.4, 1600, 3900] },
        { name: "Koenigsegg Jesko A", rank: "1B", stats: [330, 1600, 2.5, 1500, 3400] },
        { name: "Rimac Nevera", rank: "1C", stats: [412, 1914, 1.85, 2360, 2400] },
        { name: "Ferrari LaFerrari", rank: "2A", stats: [350, 963, 2.9, 900, 1450] },
        { name: "Lamborghini Revuelto", rank: "2B", stats: [350, 1015, 2.5, 850, 680] },
        { name: "Porsche 911 GT2 RS", rank: "2C", stats: [340, 700, 2.7, 750, 350] },
        { name: "McLaren Speedtail", rank: "3A", stats: [403, 1035, 2.9, 900, 2800] },
        { name: "Aston Martin Valkyrie", rank: "3B", stats: [402, 1139, 2.5, 900, 3300] },
        { name: "Pagani Huayra R", rank: "3C", stats: [370, 850, 2.8, 900, 3500] },
        { name: "Mercedes AMG ONE", rank: "4A", stats: [352, 1063, 2.9, 900, 2920] },
      ]
    },
  
    motos: {
      name: "Motos Deportivas",
      emoji: "🏍️",
      flags: ["🇯🇵","🇮🇹","🇦🇹","🇬🇧","🇩🇪","🇺🇸","🇸🇪","🇨🇿","🇫🇷"],
      stats: ["Vel. Máx. (km/h)", "Potencia (CV)", "Cilindrada (cc)", "Peso (kg)", "Par (Nm)"],
      cards: [
        { name: "Kawasaki Ninja H2R", rank: "1A", stats: [400, 310, 998, 216, 165] },
        { name: "Ducati Panigale V4R", rank: "1B", stats: [299, 240, 998, 193, 116] },
        { name: "BMW M 1000 RR", rank: "1C", stats: [305, 212, 999, 192, 113] },
        { name: "Honda CBR1000RR-R SP", rank: "2A", stats: [299, 217, 999, 201, 113] },
        { name: "Yamaha YZF-R1M", rank: "2B", stats: [299, 200, 998, 202, 113] },
        { name: "Aprilia RSV4 1100 F", rank: "2C", stats: [299, 217, 1099, 204, 125] },
        { name: "Suzuki GSX-R1000R", rank: "3A", stats: [297, 202, 999, 203, 117] },
        { name: "KTM RC 8C", rank: "3B", stats: [280, 130, 889, 148, 95] },
        { name: "MV Agusta F4 RR", rank: "3C", stats: [302, 201, 998, 193, 115] },
        { name: "Triumph Daytona Moto2", rank: "4A", stats: [280, 128, 765, 166, 90] },
      ]
    }
  
  };