import math

class CelestialBody:
    def __init__(self, name, mass, radius):
        self._name = name
        self._mass = mass
        self._radius = radius

    def calculate_density(self):
        volume = (4/3) * math.pi * (self._radius ** 3)
        if volume == 0:
            return 0
        return self._mass / volume

    def __str__(self):
        return self._name + " (M:" + str(self._mass) + ", R:" + str(self._radius) + ")"