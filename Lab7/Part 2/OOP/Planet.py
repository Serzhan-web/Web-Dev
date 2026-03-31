from CelestialBody import CelestialBody

class Planet(CelestialBody):
    def __init__(self, name, mass, radius, habitable):
        super().__init__(name, mass, radius)
        self._habitable = habitable

    def __str__(self):
        status = "Yes" if self._habitable else "No"
        return super().__str__() + " | Habitable: " + status

    def get_info(self, atmosphere=None):
        info = "Planet " + self._name
        if atmosphere:
            return info + " with " + atmosphere + " atmosphere."
        return info