from CelestialBody import CelestialBody

class Planet(CelestialBody):
    def __init__(self, name, mass, radius, habitable):
        super().__init__(name, mass, radius)
        self.habitable = habitable

    def __str__(self):
        return f"{super().__str__()} | Habitable: {self.habitable}"

    def get_info(self, atmosphere=None):
        info = f"Planet {self.name}"
        if atmosphere:
            return f"{info} with {atmosphere} atmosphere."
        return info