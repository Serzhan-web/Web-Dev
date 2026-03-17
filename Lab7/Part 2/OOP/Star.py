from CelestialBody import CelestialBody

class Star(CelestialBody):
    def __init__(self, name, mass, radius, temperature):
        super().__init__(name, mass, radius)
        self.temperature = temperature

    def __str__(self):
        return f"{super().__str__()} | Temp: {self.temperature}K"

    def get_spectral_class(self):
        t = self.temperature
        if t >= 30000: return "O"
        if t >= 10000: return "B"
        if t >= 7500: return "A"
        if t >= 6000: return "F"
        if t >= 5200: return "G"
        if t >= 3700: return "K"
        return "M"